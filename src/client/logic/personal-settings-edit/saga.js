import * as actionTypes from "./actionTypes";
import { all, call, takeLatest, put } from "redux-saga/effects";
import userService from "client/services/userService";

function* sendSettings(action) {
    try {
        yield call();
    } catch (err) {
        console.log(err);
    }
}

function* getCurrentUser(action) {
    try {
        const user = yield call(userService.getCurrentUser);
        yield put({
            type: actionTypes.GET_CURRENT_USER_SUCCESS,
            payload: user
        });
    } catch (err) {
        console.log(err);
        yield put({
            type: actionTypes.GET_CURRENT_USER_FAILURE
        });
    }
}

export default function* personalSettingsSaga() {
    yield all([
        takeLatest(actionTypes.USER_SETTINGS_SEND, sendSettings),

        takeLatest(actionTypes.GET_CURRENT_USER, getCurrentUser)
    ]);
}
