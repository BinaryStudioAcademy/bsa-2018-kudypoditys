import { call, put, all, takeLatest } from 'redux-saga/effects';
import {
    GET_MEAL_TYPES,
    GET_MEAL_TYPES_SUCCESS,
    GET_MEAL_TYPES_FAILED
} from './actionTypes';
import mealTypeService from 'client/services/mealTypeService';

function* getMealTypes() {
  try {
    const mealTypes = yield call(mealTypeService.getAll);
    yield put({
      type: GET_MEAL_TYPES_SUCCESS,
      payload: mealTypes
    });
  } catch (err) {
    yield put({
      type: GET_MEAL_TYPES_FAILED,
      payload: err.message
    });
  }
}

export default function* mealTypesSaga() {
  yield all([
    takeLatest(GET_MEAL_TYPES, getMealTypes)
  ])
}