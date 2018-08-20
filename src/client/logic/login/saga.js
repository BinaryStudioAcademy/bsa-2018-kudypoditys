import { call, put, all, takeLatest } from "redux-saga/effects";
import * as actionTypes from "./actionTypes";
import authService from "client/services/authService";
import userService from "client/services/userService";
import history from "client/history";

function* login(action) {
    const { email, password } = action.payload;
    try {
        yield call(authService.login, email, password);
        yield put({
            type: actionTypes.LOGIN_SUCCESS
        });
        history.push("/");
    } catch (err) {
        yield put({
            type: actionTypes.LOGIN_FAILURE,
            payload: {
                error: err.message
            }
        });
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
        yield put({
            type: actionTypes.GET_CURRENT_USER_FAILURE
        });
    }
}

export default function* loginSaga() {
    yield all([
        takeLatest(actionTypes.LOGIN, login),
        takeLatest(actionTypes.LOGIN_SUCCESS, getCurrentUser)
    ]);
}
