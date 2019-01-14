import { call, put, takeLatest, all } from "redux-saga/effects";
import propertyService from "client/services/propertyService";
import mealInRoomService from "client/services/mealInRoomService";
import * as actionTypes from "./actionTypes";
import api from "../../helpers/api";

function* getUserPropertiesInfo(action) {
    try {
        const propetyResponse = yield call(
            propertyService.getUserPropertiesInfo, action.payload
        );
        yield put({
            type: actionTypes.GET_CURRENT_USER_INFO_SUCCESS,
            payload: {
                propetyResponse
            }
        });
    } catch (error) {
        console.log(error);
        yield put({ type: actionTypes.GET_CURRENT_USER_INFO_FAILURE });
    }
}

function* updateMealsInPropertyRoom(action) {
    try {
        const initialValues = action.payload.extra.initialMealsWhichLeft;
        const { meals : mealsList, mealTypes } = action.payload.extra;
        const requestData = Object.assign({}, action.payload, {extra: undefined});

        const meals = yield call(
            mealInRoomService.update, requestData
        );

        const newItemsWithMappedProps = yield meals
            .map(x => Object.assign({}, x,
                {
                    name : {name : mealsList.find(meal => meal.id === x.mealId).name},
                    type : {name : mealTypes.find(meal => meal.id === x.mealTypeId).name}
                }));

        yield put({
            type: actionTypes.UPDATE_MEALS_IN_PROPERTY_ROOM_SUCCESS,
            payload: {
                meals : initialValues.concat(newItemsWithMappedProps),
                roomId : action.payload.roomId
            }
        });
    } catch (error) {
        console.log(error);
        yield put({ type: actionTypes.UPDATE_MEALS_IN_PROPERTY_ROOM_FAILURE});
    }
}

function* cancelBooking(action) {
    try {
        yield call(
            api.sendAuthRequest,
            `/api/reservation/owner/${action.payload.id}`,
            "put",
            { reason: action.payload.reason }
        );
        yield put({
            type: actionTypes.CANCEL_OWNER_BOOKING_SUCCESS
        });
    } catch (error) {
        console.log(error.message);
        yield put({ type: actionTypes.CANCEL_OWNER_BOOKING_FAILURE });
    }
}

export default function* availabilitySaga() {
    yield all([
        takeLatest(actionTypes.GET_CURRENT_USER_INFO, getUserPropertiesInfo),
        takeLatest(actionTypes.CANCEL_OWNER_BOOKING, cancelBooking),
        takeLatest(actionTypes.UPDATE_MEALS_IN_PROPERTY_ROOM, updateMealsInPropertyRoom)
    ]);
}
