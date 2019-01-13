import { call, put, all, takeLatest } from "redux-saga/effects";
import * as actionTypes from "./actionTypes";
import mealInRoomService from "../../services/mealInRoomService";

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
  try {
    const meal = yield call(mealInRoomService.create);
    yield put({
      type: actionTypes.CREATE_MEALS_IN_ROOM_SUCCESS,
      payload: meal
    });
  } catch (err) {
    yield put({
      type: actionTypes.CREATE_MEALS_IN_ROOM_FAILED,
      payload: err.message
    });
  }
}

export default function* mealsInRoomSaga() {
  yield all([
    takeLatest(actionTypes.GET_MEALS_IN_ROOM, getMealsInRoom),
    takeLatest(actionTypes.CREATE_MEALS_IN_ROOM, createMealsInRoom),
  ])
}
