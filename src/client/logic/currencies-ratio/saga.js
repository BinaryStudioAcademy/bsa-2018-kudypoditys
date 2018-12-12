import { call, put, all, takeLatest } from 'redux-saga/effects';
import {
  CONVERT_CURRENCY,
  CONVERT_CURRENCY_SUCCESS,
  CONVERT_CURRENCY_FAILED
} from './actionTypes';
import currencyService from 'client/services/currencyService';

function* getCurrenciesRatio() {
    try {
        const value = yield call(currencyService.getCurrencyConvertedValue);
        yield put({
            type: CONVERT_CURRENCY_SUCCESS,
            payload: value
        });
    } catch (err) {
        yield put({
            type: CONVERT_CURRENCY_FAILED,
            payload: err.message
        });
    }
}

export default function* currenciesSaga() {
  yield all([
    takeLatest(CONVERT_CURRENCY, getCurrenciesRatio)
  ])
}