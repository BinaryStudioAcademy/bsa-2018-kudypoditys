import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import authService from 'client/services/authService';

function* logout() {
    try {
        authService.logout();
        yield put({
            type: actionTypes.LOGOUT_SUCCESS
        });
    } catch (err) {
        yield put({
            type: actionTypes.LOGOUT_FAILED
        })
    };
}
function* changeCurrency(action){
    const URL = `http://free.currencyconverterapi.com/api/v5/convert?q=USD_${action.payload}&compact=y`;
    try{
       const response =  yield call(fetch, URL)
       const body = yield response.json()
       const rate = body['USD_'+action.payload].val
       yield put({
           type: actionTypes.CURRENCY_SELECT,
           payload:{
                selectedCurrency: action.payload,
                rate: rate
           }
       })
    } catch(err){
        yield put({
            type: actionTypes.CURRENCY_RATE_GET_FAILED
        })
    }
}
export default function* headerSaga() {
    yield all([
        takeLatest(actionTypes.LOGOUT, logout),
        takeLatest(actionTypes.CURRENCY_RATE_GET, changeCurrency)
    ])
}
