import { call, put, all, takeLatest } from 'redux-saga/effects';
import {
    GET_MEAL_TYPES,
    GET_MEAL_TYPES_SUCCESS,
    GET_MEAL_TYPES_FAILED
} from './actionTypes';
import mealTypesService from 'client/services/mealTypesService';

function* getMealTypes() {
  try {
    const mealTypes = yield call(mealTypesService.getAll);
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