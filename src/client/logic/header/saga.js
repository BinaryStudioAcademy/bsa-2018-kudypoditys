import { put, all, takeLatest } from "redux-saga/effects";
import * as actionTypes from "./actionTypes";
import authService from "../../services/authService";

function* logout() {
    try {
        authService.logout();
        yield put({
            type: actionTypes.LOGOUT_SUCCESS
        });
    } catch (err) {
        yield put({
            type: actionTypes.LOGOUT_FAILED
        })
    };
}

export default function* headerSaga() {
    yield all([
        takeLatest(actionTypes.LOGOUT, logout),
    ])
}
