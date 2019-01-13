import { call, put, all, takeLatest } from "redux-saga/effects";
import {
  GET_ROOM_TYPES,
  GET_ROOM_TYPES_SUCCESS,
  GET_ROOM_TYPES_FAILED
} from "./actionTypes";
import roomTypeService from "../../services/roomTypeService";

function* getRoomTypes() {
  try {
    const roomTypes = yield call(roomTypeService.getAll);
    yield put({
      type: GET_ROOM_TYPES_SUCCESS,
      payload: roomTypes
    });
  } catch (err) {
    yield put({
      type: GET_ROOM_TYPES_FAILED,
      payload: err.message
    });
  }
}

export default function* roomTypesSaga() {
  yield all([
    takeLatest(GET_ROOM_TYPES, getRoomTypes)
  ])
}
