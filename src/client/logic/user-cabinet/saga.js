import {call, put, all, takeLatest} from "redux-saga/effects";
import * as actionTypes from "./actionTypes";
import api from "../../helpers/api";


export default function* userCabinetSaga() {
    function* getBookings(action) {
        try {
            const response = yield call(
                api.sendAuthRequest,
                "/api/reservation/byuser",
                "get"
            );
            yield put({
                type: actionTypes.GET_USER_BOOKINGS_SUCCESS,
                payload: response.data
            });
        } catch (err) {
            console.log(err.message);
            yield put({
                type: actionTypes.GET_USER_BOOKINGS_FAILURE,
                payload: err
            });
        }
    }

    yield all([takeLatest(actionTypes.GET_USER_BOOKINGS, getBookings)]);
}
