import { call, put, all, takeLatest } from "redux-saga/effects";
import * as actionTypes from "./actionTypes";
import api from "../../helpers/api";

export default function* propertyPageSaga() {
    function* getPropertyInfo(action) {
        try {
            const response = yield call(
                api.sendRequest,
                `/api/property/${action.payload}`,
                "get"
            );
            let propertyData = response.data.property;
            propertyData.notes = response.data.notes;
            yield put({
                type: actionTypes.GET_PROPERTY_INFO_SUCCESS,
                payload: propertyData
            });
        } catch (err) {
            console.log(err);
            yield put({
                type: actionTypes.GET_PROPERTY_INFO_FAILURE,
                payload: err
            });
        }
    }

    function* bookProperty(action) {
        try {
            const response = yield call(
                api.sendAuthRequest,
                "/api/reservation",
                "post",
                action.payload
            );
            yield put({
                type: actionTypes.BOOK_PROPERTY_SUCCESS,
                payload: "Your booking was a success!"
            });
        } catch (err) {
            return yield put({
                type: actionTypes.BOOK_PROPERTY_FAILURE,
                payload: err.message
            });
        }
    }

    function* checkAvailability(action) {
        try {
            const input = action.payload;
            if (!input.checkIn || !input.checkOut)
                return yield put({
                    type: actionTypes.CHECK_AVAILABILITY_FAILURE,
                    payload:
                        "Fill in check-in and check-out dates to check availability"
                });
            const response = yield call(
                api.sendRequest,
                "/api/property/availability",
                "put",
                input
            );
            yield put({
                type: actionTypes.CHECK_AVAILABILITY_SUCCESS,
                payload: response.data
            });
        } catch (err) {
            return yield put({
                type: actionTypes.CHECK_AVAILABILITY_FAILURE,
                payload: err.message
            });
        }
    }

    function* getRoomsInfo(action) {
        try {
            //TODO api call
            const input = action.payload;
            const response = yield call(
                api.sendRequest,
                "/api/property/availability",
                "put",
                input
            );
            yield put({
                type: actionTypes.GET_ROOMS_INFO_SUCCESS,
                payload: response.data
            });
        } catch (err) {
            yield put({
                type: actionTypes.GET_ROOMS_INFO_FAILURE,
                payload: err.message
            });
        }
    }

    yield all([
        takeLatest(actionTypes.GET_PROPERTY_INFO, getPropertyInfo),
        takeLatest(actionTypes.BOOK_PROPERTY, bookProperty),
        takeLatest(actionTypes.CHECK_AVAILABILITY, checkAvailability),
        takeLatest(actionTypes.GET_ROOMS_INFO, getRoomsInfo)
    ]);
}
