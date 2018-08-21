import { PROPERTY_REGISTER } from "./actionTypes";
import { all, call, put, takeLatest, select } from "redux-saga/effects";

function* registerProperty(action) {
    try {
        const { propertyRegistration } = yield select();
        console.log(propertyRegistration);
    } catch (err) {
        console.log(err);
    }
}

export default function* propertyRegistrationSaga() {
    yield all([takeLatest(PROPERTY_REGISTER, registerProperty)]);
}