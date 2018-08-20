import { all, fork } from "redux-saga/effects";

import loginSaga from "client/logic/login/saga";
import signupSaga from "client/logic/registration/saga";
import headerSaga from "client/logic/header/saga";

export default function* rootSaga() {
    yield all([fork(loginSaga), fork(signupSaga), fork(headerSaga)]);
}
