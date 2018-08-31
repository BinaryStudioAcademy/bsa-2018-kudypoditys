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

function* uploadAvatar(action) {
    try {
        const avatar = yield call(userService.uploadAvatar(action));
        yield put({
            type: actionTypes.UPLOAD_USER_AVATAR_SUCCESS,
            payload: {
                avatarUrl: avatar.body.secure_url
            }
        });
    } catch (err) {
        console.log(err);
        yield put({
            type: actionTypes.UPLOAD_USER_AVATAR_FAILURE
        });
    }
}

export default function* personalSettingsSaga() {
    yield all([
        takeLatest(actionTypes.USER_SETTINGS_SEND, sendSettings),
        takeLatest(actionTypes.GET_CURRENT_USER, getCurrentUser),
        takeLatest(actionTypes.UPLOAD_USER_AVATAR, uploadAvatar)
    ]);
}
