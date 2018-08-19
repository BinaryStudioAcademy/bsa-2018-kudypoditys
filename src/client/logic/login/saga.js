import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import authService from 'client/services/authService';
import userService from 'client/services/userService';

function* login(action) {
    const { email, password } = action.payload;
    try {
        yield call(authService.login, email, password);
        yield put({
            type: actionTypes.LOGIN_SUCCESS
        });
    } catch (err) {
        yield put({
            type: actionTypes.LOGIN_FAILURE
        })
    };
}

function* getMe(action) {
    try {
        const user = yield call(userService.getMe);
        yield put({
            type: actionTypes.GET_ME_SUCCESS,
            payload: user
        })
    } catch (err) {
        yield put({
            type: actionTypes.GET_ME_FAILED
        })
    }
}

export default function* loginSaga() {
    yield all([
        takeLatest(actionTypes.LOGIN, login),
        takeLatest(actionTypes.LOGIN_SUCCESS, getMe)
    ])
}
