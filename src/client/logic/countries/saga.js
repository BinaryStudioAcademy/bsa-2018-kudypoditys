import { call, put, all, takeLatest } from "redux-saga/effects";
import {
  GET_COUNTRIES,
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRIES_FAILED
} from "./actionTypes";
import countryService from "../../services/countryService";

function* getCountries() {
  try {
    const countries = yield call(countryService.getAllDetails);
    yield put({
      type: GET_COUNTRIES_SUCCESS,
      payload: countries
    });
  } catch (err) {
    yield put({
      type: GET_COUNTRIES_FAILED,
      payload: err.message
    });
  }
}

export default function* countriesSaga() {
  yield all([
    takeLatest(GET_COUNTRIES, getCountries)
  ])
}