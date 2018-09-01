import { call, put, takeLatest, all } from 'redux-saga/effects';

import { RESET_PASSWORD, RESET_PASSWORD_SUCSESS, RESET_PASSWORD_FAILED } from './actionTypes';
import authService from 'client/services/authService';

function* resetPassword(action) {
    try {
        const { email, token, newPassword } = action.payload;
        yield call(authService.resetPassword, email, token, newPassword);
        yield put({
            type: RESET_PASSWORD_SUCSESS
        });
    } catch (err) {
        yield put({
            type: RESET_PASSWORD_FAILED,
            payload: err.message
        });
    }
}

export default function* resetPasswordSaga() {
    yield all([
        takeLatest(RESET_PASSWORD, resetPassword)
    ])
}