import { all, fork } from 'redux-saga/effects';

import loginSaga from 'client/logic/login/saga';
import headerSaga from 'client/logic/header/saga';
import propertyRegistrationSaga from 'client/logic/main-info-tab/saga';

export default function* rootSaga() {
    yield all([
        fork(loginSaga),
        fork(headerSaga),
        fork(propertyRegistrationSaga)
    ])
}
