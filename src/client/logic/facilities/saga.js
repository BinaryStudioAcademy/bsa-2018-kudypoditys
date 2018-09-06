import { call, put, all, takeLatest } from 'redux-saga/effects';
import {
  GET_FACILITIES,
  GET_FACILITIES_FAILED,
  GET_FACILITIES_SUCCESS
} from './actionTypes';
import facilityService from 'client/services/facilityService';

function* getFacilities() {
  try {
    const facilities = yield call(facilityService.getAll);
    yield put({
      type: GET_FACILITIES_SUCCESS,
      payload: facilities
    });
  } catch (err) {
    yield put({
      type: GET_FACILITIES_FAILED,
      payload: err.message
    });
  }
}

export default function* facilitiesSaga() {
  yield all([
    takeLatest(GET_FACILITIES, getFacilities)
  ])
}