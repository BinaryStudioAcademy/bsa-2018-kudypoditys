import { call, put, all, takeLatest } from "redux-saga/effects";
import * as actionTypes from "./actionTypes";
import propertyService from "../../services/propertyService";
import history from "../../history";
import { modalShow } from "../simple-modal/actions";

export default function* propertyEditSaga() {
    function* updateProperty(action) {
        try {
            const property = yield call(propertyService.updateProperty, action.payload);
            yield put({
                type: actionTypes.PROPERTY_UPDATE_SUCCESS,
                payload: property
            });
            yield put(modalShow(getSuccessModalConfig(action.payload.id)));
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

const getSuccessModalConfig = (propertyId) => ({
    header: 'Property save success',
    content: 'You have saved property, please click any button to continue',
    buttons: [
        {
            content: 'Show my property',
            positive: true,
            onClick: () => history.push(`/property/${propertyId}`)
        },
        {
            content: 'Close',
            negative: true,
            onClick: () => { }
        }
    ]
});
