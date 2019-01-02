import { call, put, all, takeLatest } from 'redux-saga/effects';
import 
  *
as actionTypes from './actionTypes';
import mealInRoomService from 'client/services/mealInRoomService';

function* getMealsInRoom() {
  try {
    const meals = yield call(mealInRoomService.getAll);
    yield put({
      type: actionTypes.GET_MEAL_IN_ROOM_SUCCESS,
      payload: meals
    });
  } catch (err) {
    yield put({
      type: actionTypes.GET_MEAL_IN_ROOM_FAILED,
      payload: err.message
    });
  }
}

function* createMealsInRoom(){
  try{

  }
  catch (err) {

  }
}

export default function* mealsInRoomSaga() {
  yield all([
    takeLatest(actionTypes.GET_MEALS_IN_ROOM, getMealsInRoom),
    takeLatest(actionTypes.CREATE_MEALS_IN_ROOM, createMealsInRoom),
  ])
}