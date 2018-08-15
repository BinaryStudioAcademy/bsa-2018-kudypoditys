import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import authService from '../../services/authService';

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

export default function* loginSaga() {
    yield all([
        takeLatest(actionTypes.LOGIN, login)
    ])
}
