import { call, put, takeLatest,all } from 'redux-saga/effects';
import { RESET_PASSWORD_POST,
         RESET_PASSWORD_SUCSESS,
         RESET_PASSWORD_FAILED
        } from './actionTypes';

function* resetPassword(action) {
    console.log(action.payload)
    const URL = 'http://127.0.0.1:5000/api/reset/' + action.payload.data.token;
    const BODY = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            password: action.payload.data.password,
            confirm: action.payload.data.confirm
        })

    }

    try {
        const propetyResponse = yield call(fetch, URL, BODY);
        console.log(111);
        yield put({
            type:RESET_PASSWORD_SUCSESS,
            payload: action.payload
        });
    }
    catch (error) {
        console.log(error)
        yield put({ type:RESET_PASSWORD_FAILED})
    }
}

export default function* forgotPasswordSaga() {
    yield all([
        takeLatest(RESET_PASSWORD_POST, resetPassword)
    ])
}