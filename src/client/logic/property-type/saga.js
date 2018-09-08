import { call, put, all, takeLatest } from 'redux-saga/effects';
import {
  GET_PROPERTY_TYPES,
  GET_PROPERTY_TYPES_SUCCESS,
  GET_PROPERTY_TYPES_FAILED,
} from './actionTypes';
import propertyTypeService from 'client/services/propertyTypeService';

function* getPropertyTypes() {
  try {
    const propertyTypes = yield call(propertyTypeService.getAll);
    yield put({
      type: GET_PROPERTY_TYPES_SUCCESS,
      payload: propertyTypes
    });
  } catch (err) {
    yield put({
      type: GET_PROPERTY_TYPES_FAILED,
      payload: err.message
    });
  }
}

export default function* paymentTypesSaga() {
  yield all([
    takeLatest(GET_PROPERTY_TYPES, getPropertyTypes)
  ])
}