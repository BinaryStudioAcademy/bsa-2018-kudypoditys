import { PROPERTY_REGISTER } from "./actionTypes";
import { all, call, put, takeLatest, select } from "redux-saga/effects";
import PropertyService from "client/services/propertyService";

function* registerProperty(action) {
    try {
        const { propertyPaymentTab, propertyServicesTab } = yield select();
        console.log({
            propertyPaymentTab,
            propertyServicesTab
            // other tabs should be there
        });
        const propertyData = {
            propertyPaymentTab,
            propertyServicesTab
        };
        PropertyService.createPropery(propertyData);
    } catch (err) {
        console.log(err);
    }
}

export default function* propertyRegistrationSaga() {
    yield all([takeLatest(PROPERTY_REGISTER, registerProperty)]);
}