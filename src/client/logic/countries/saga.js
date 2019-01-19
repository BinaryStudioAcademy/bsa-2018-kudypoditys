import { call, put, all, takeLatest } from 'redux-saga/effects';
import {
  GET_COUNTRIES,
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRIES_FAILED
} from './actionTypes';
import { normalize } from "normalizr";
import { countrySchema } from "./country.schema";
import countryService from 'client/services/countryService';

function* getCountries() {
  try {
    const countries = yield call(countryService.getAllDetails);
    const { result, entities } = normalize(countries, [
        countrySchema
    ]);
    yield put({
      type: GET_COUNTRIES_SUCCESS,
      payload: { all : result, byId : entities}
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