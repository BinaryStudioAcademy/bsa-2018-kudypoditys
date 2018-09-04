import { call, put, all, takeLatest } from 'redux-saga/effects';
import {
  GET_PAYMENT_TYPES,
  GET_PAYMENT_TYPES_SUCCESS,
  GET_PAYMENT_TYPES_FAILED
} from './actionTypes';
import paymentTypeService from 'client/services/paymentType';

function* getPaymentTypes() {
  try {
    const paymentTypes = yield call(paymentTypeService.getAll);
    yield put({
      type: GET_PAYMENT_TYPES_SUCCESS,
      payload: paymentTypes
    });
  } catch (err) {
    yield put({
      type: GET_PAYMENT_TYPES_FAILED,
      payload: err.message
    });
  }
}

export default function* paymentTypesSaga() {
  yield all([
    takeLatest(GET_PAYMENT_TYPES, getPaymentTypes)
  ])
}