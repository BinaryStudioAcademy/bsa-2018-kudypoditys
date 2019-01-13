import { call, put, takeLatest, all } from "redux-saga/effects";
import { reset } from "redux-form";
import history from "../../history";

import propertyService from "../../services/propertyService";
import * as actionTypes from "./actionTypes";
import { modalShow } from "../simple-modal/actions";

function* createProperty(action) {
    try {
        const property = yield call(propertyService.createProperty, action.payload);
        yield put({
            type: actionTypes.CREATE_PROPERTY_SUCCESS
        });
        yield put(reset('propertyForm'));

        yield put(modalShow(getSuccessModalConfig(property.id)));
    }
    catch (error) {
        yield put({
            type: actionTypes.CREATE_PROPERTY_FAILED,
            payload: error.message
        });
    }
}

export default function* propertySaga() {
    yield all([
        takeLatest(actionTypes.CREATE_PROPERTY, createProperty)
    ])
}

const getSuccessModalConfig = (propertyId) => ({
    header: 'Property registration success',
    content: 'You have created property, please click any button to continue',
    buttons: [
        {
            content: 'Add one more',
            icon: 'add',
            onClick: () => history.push('/add-property')
        },
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
