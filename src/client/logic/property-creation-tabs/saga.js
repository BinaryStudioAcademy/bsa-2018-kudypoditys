import { call, put, takeLatest,all } from 'redux-saga/effects';
import propertyService from 'client/services/propertyService';
import * as actionTypes from './actionTypes';

function* createProperty(action) {
    try {
        console.log("saga createProperty")
        const propetyResponse = yield call(propertyService.createProperty, action.payload);
        yield put({
            type:actionTypes.CREATE_PROPERTY_SUCCESS,
            payload: {
                ...propetyResponse.data
            }
        });
    }
    catch (error) {
        yield put({ type:actionTypes.CREATE_PROPERTY_FAILED})
    }
}

function* updateProperty(action) {
    try {
        yield call(propertyService.updateProperty, action.payload);
        yield put({
            type:actionTypes.UPDATE_PROPERTY_SUCCESS,
            payload: action.payload
        });
    }
    catch (error) {
        yield put({ type:actionTypes.UPDATE_PROPERTY_FAILED  })
    }
}

export default function* propertySaga() {
    yield all([
        takeLatest(actionTypes.CREATE_PROPERTY, createProperty),
        takeLatest(actionTypes.UPDATE_PROPERTY, updateProperty)
    ])
}
