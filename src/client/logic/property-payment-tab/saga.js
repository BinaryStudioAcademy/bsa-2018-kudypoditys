import { PROPERTY_REGISTER } from "./actionTypes";
import { all, call, put, takeLatest, select } from "redux-saga/effects";

function* registerProperty(action) {
    try {
        const { propertyPaymentTab, propertyServicesTab } = yield select();
        console.log({
            propertyPaymentTab,
            propertyServicesTab
        });
    } catch (err) {
        console.log(err);
    }
}

export default function* propertyRegistrationSaga() {
    yield all([takeLatest(PROPERTY_REGISTER, registerProperty)]);
}