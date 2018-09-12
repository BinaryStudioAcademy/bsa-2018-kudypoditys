import { call, put, takeLatest, all } from 'redux-saga/effects';

import { RESET_PASSWORD, RESET_PASSWORD_SUCSESS, RESET_PASSWORD_FAILED } from './actionTypes';
import authService from 'client/services/authService';
import { modalShow } from 'client/logic/simple-modal/actions';
import history from 'client/history';

function* resetPassword(action) {
    try {
        const { email, token, newPassword } = action.payload;
        yield call(authService.resetPassword, email, token, newPassword);
        yield put({
            type: RESET_PASSWORD_SUCSESS
        });
        yield put(modalShow(getSuccessResetPassword()));
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

const getSuccessResetPassword = () => ({
    header: 'Password reset',
    content: 'Your password was successfully reseted. Please log in with new password',
    buttons: [
        {
            content: 'Cancel',
            icon: 'close',
            negative: true,
        },
        {
            content: 'Login',
            icon: 'check',
            positive: true,
            onClick: () => history.push('/login')
        },
    ]
});