import { all, fork } from 'redux-saga/effects';
import loginSaga from 'client/logic/login/saga';

export default function* rootSaga() {
    yield all([
        fork(loginSaga)
    ])
}
