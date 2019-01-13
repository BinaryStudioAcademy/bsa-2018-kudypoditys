import { call, put, takeLatest, all } from "redux-saga/effects";
import propertyService from "../../services/propertyService";
import * as actionTypes from "./actionTypes";
import api from "../../helpers/api";

function* getUserpropertiesInfo(id) {
    try {
        const propetyResponse = yield call(
            propertyService.getUserPropertiesInfo,
            id.id
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
        takeLatest(actionTypes.GET_CURRENT_USER_INFO, getUserpropertiesInfo),
        takeLatest(actionTypes.CANCEL_OWNER_BOOKING, cancelBooking)
    ]);
}
