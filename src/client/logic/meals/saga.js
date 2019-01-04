import { call, put, all, takeLatest } from 'redux-saga/effects';
import {
    GET_MEALS,
    GET_MEALS_SUCCESS,
    GET_MEALS_FAILED
} from './actionTypes';
import mealService from 'client/services/mealService';

function* getMeals() {
  try {
    const meals = yield call(mealService.getAll);
    yield put({
      type: GET_MEALS_SUCCESS,
      payload: meals
    });
  } catch (err) {
    yield put({
      type: GET_MEALS_FAILED,
      payload: err.message
    });
  }
}

export default function* mealsSaga() {
  yield all([
    takeLatest(GET_MEALS, getMeals)
  ])
}