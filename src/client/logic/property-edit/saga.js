import { call, put, all, takeLatest } from "redux-saga/effects";
import * as actionTypes from "./actionTypes";
import propertyService from "client/services/propertyService";

export default function* propertyEditSaga() {
    function* updateProperty(action) {
        try {
            const property = yield call(propertyService.updateProperty, action);
            yield put({
                type: actionTypes.PROPERTY_UPDATE_SUCCESS,
                payload: property
            });
        } catch (err) {
            console.log(err);
            yield put({
                type: actionTypes.PROPERTY_UPDATE_FAIL,
                payload: err
            });
        }
    }

    yield all([
        takeLatest(actionTypes.PROPERTY_UPDATE, updateProperty)
    ]);
}
