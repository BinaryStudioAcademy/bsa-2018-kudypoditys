import { call, put, all, takeLatest } from 'redux-saga/effects';
import {
  GET_CURRENCIES,
  GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_FAILED,
} from './actionTypes';
import currencyService from 'client/services/currencyService';

function* getCurrencies() {
  try {
    const currencies = yield call(currencyService.getAll);
    yield put({
      type: GET_CURRENCIES_SUCCESS,
      payload: currencies
    });
  } catch (err) {
    yield put({
      type: GET_CURRENCIES_FAILED,
      payload: err.message
    });
  }
}

export default function* currenciesSaga() {
  yield all([
    takeLatest(GET_CURRENCIES, getCurrencies)
  ])
}