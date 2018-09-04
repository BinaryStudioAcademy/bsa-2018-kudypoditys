import { call, put, takeLatest, all } from 'redux-saga/effects';
import propertyService from 'client/services/propertyService';
import * as actionTypes from './actionTypes';

function* createProperty(action) {
    try {
        const propetyResponse = yield call(propertyService.createProperty, action.payload);
        yield put({
            type: actionTypes.CREATE_PROPERTY_SUCCESS,
            payload: {
                ...propetyResponse.data
            }
        });
    }
    catch (error) {
        console.log(error.message)
        yield put({ type: actionTypes.CREATE_PROPERTY_FAILED })
    }
}

export default function* propertySaga() {
    yield all([
        takeLatest(actionTypes.CREATE_PROPERTY, createProperty)
    ])
}
