import { call, put, takeLatest,all } from 'redux-saga/effects';
import propertyService from 'client/services/propertyService';
import { RESET_EMAIL_SUCSESS,
         RESET_EMAIL_FAILED,
         RESET_EMAIL_POST
        } from './actionTypes';

function* sendEmail(action) {
    const URL = 'http://127.0.0.1:5000/api/forgot';
    const BODY = {
            "email": "minzdarov@gmail.com"
    }
    try {
        console.log("saga createProperty")
        // const propetyResponse = yield call(fetch, URL, BODY);
        // console.log(propetyResponse);
        yield put({
            type:RESET_EMAIL_SUCSESS,
            payload: action.payload
        });
    }
    catch (error) {
        yield put({ type:RESET_EMAIL_FAILED})
    }
}

function* updateProperty(action) {
    try {
        yield call(propertyService.updateProperty, action.payload);
        yield put({
            type:RESET_EMAIL_SUCSESS,
            payload: action.payload
        });
    }
    catch (error) {
        yield put({ type: RESET_EMAIL_FAILED })
    }
}

export default function* forgotPasswordSaga() {
    yield all([
        takeLatest(RESET_EMAIL_POST, sendEmail)
        // takeLatest(actionTypes.UPDATE_PROPERTY, updateProperty)
    ])
}