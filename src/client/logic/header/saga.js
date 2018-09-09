import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import authService from 'client/services/authService';
import userService from 'client/services/userService'
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
function* changeUserCurrency(action){
    try {
        const user = yield call(userService.updateUser, action);
        console.log('-->SAGA '+action.payload.preferredCurrency)
        yield put({
            type: 'actionTypes.USER_SETTINGS_SEND_SUCCES',
            payload: user,
            selectedCurrency: action.payload.preferredCurrency
        });
    } catch (err) {
        console.log(err);
        yield put({
            type: 'actionTypes.USER_SETTINGS_SEND_FAILURE'
        });
    }
}
export default function* headerSaga() {
    yield all([
        takeLatest(actionTypes.LOGOUT, logout),
        takeLatest(actionTypes.USER_CURRENCY_UPDATE, changeUserCurrency)
    ])
}