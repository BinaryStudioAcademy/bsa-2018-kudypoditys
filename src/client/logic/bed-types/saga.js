import { call, put, all, takeLatest } from "redux-saga/effects";
import {
  GET_BED_TYPES,
  GET_BED_TYPES_SUCCESS,
  GET_BED_TYPES_FAILED
} from "./actionTypes";
import bedTypeService from "../../services/bedTypeService";

function* getBedTypes() {
  try {
    const bedTypes = yield call(bedTypeService.getAll);
    yield put({
      type: GET_BED_TYPES_SUCCESS,
      payload: bedTypes
    });
  } catch (err) {
    yield put({
      type: GET_BED_TYPES_FAILED,
      payload: err.message
    });
  }
}

export default function* bedTypesSaga() {
  yield all([
    takeLatest(GET_BED_TYPES, getBedTypes)
  ])
}