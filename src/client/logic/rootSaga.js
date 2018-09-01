import { all, fork } from "redux-saga/effects";
import loginSaga from "client/logic/login/saga";
import signupSaga from "client/logic/registration/saga";
import headerSaga from "client/logic/header/saga";
import propertySaga from './property-creation-tabs/saga';
import emailVerificationSaga from "client/logic/verify-email/saga";
import resetPasswordSaga from 'client/logic/reset-password/saga';
import forgotPasswordSaga from 'client/logic/forgot-password/saga';

export default function* rootSaga() {
    yield all([
        fork(loginSaga),
        fork(headerSaga),
        fork(propertySaga),
        fork(signupSaga),
        fork(emailVerificationSaga),
        fork(resetPasswordSaga),
        fork(forgotPasswordSaga),
    ])
}