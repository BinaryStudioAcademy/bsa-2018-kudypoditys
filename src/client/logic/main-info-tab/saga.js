import { call, put,push } from 'redux-saga/effects';
import { ADD_PROPERTY_SUCCESS, ADD_PROPERTY_FAILURE } from './actionType';


function* addProperty (action) {
    try {
        const propertyResponse = yield call(propertyAPI.addProperty, action.payload);
        yield put({
            type: ADD_PROPERTY_SUCCESS,
            payload: {
                ...propertyResponse.data
            }
        });
        yield put(push('/property'));
    }
    catch (error) {
        yield put({ type:ADD_PROPERTY_FAILURE})
    }
}