import { call, put, all, takeLatest } from 'redux-saga/effects';
import {
  SEND_RESET_PASSWORD_EMAIL,
  SEND_RESET_PASSWORD_EMAIL_FAILED,
  SEND_RESET_PASSWORD_EMAIL_SUCCESS
} from './actionTypes';
import authService from 'client/services/authService';
import { modalShow } from 'client/logic/simple-modal/actions';

function* sendResetPasswordEmail(action) {
  try {
    const { email } = action.payload;
    yield call(authService.sendForgotPasswordEmail, email);
    yield put({
      type: SEND_RESET_PASSWORD_EMAIL_SUCCESS
    });
    yield put(modalShow(getSuccessEmailSend()))
  } catch (err) {
    yield put({
      type: SEND_RESET_PASSWORD_EMAIL_FAILED,
      payload: err.message
    });
  }
}

export default function* forgotPasswordSaga() {
  yield all([
    takeLatest(SEND_RESET_PASSWORD_EMAIL, sendResetPasswordEmail)
  ])
}

const getSuccessEmailSend = () => ({
  header: 'Email sent',
  content: 'Email with reset password link was sent successfully',
  buttons: [
    {
      content: 'OK',
      icon: 'check',
      positive: true,
    }
  ]
});