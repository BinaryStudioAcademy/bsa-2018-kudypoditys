import {call, put, all, takeLatest} from "redux-saga/effects";
import * as actionTypes from "./actionTypes";
import api from "../../helpers/api";


export default function* propertyPageSaga() {
    function* getPropertyInfo(action) {
        try {
            const response = yield call(
                api.sendRequest,
                `/api/property/${action.payload}`,
                "get"
            );
            yield put({
                type: actionTypes.GET_PROPERTY_INFO_SUCCESS,
                payload: response.data
            });
        } catch (err) {
            console.log(err);
            yield put({
                type: actionTypes.GET_PROPERTY_INFO_FAILURE,
                payload: err
            });
        }
    }

    function* bookProperty(action) {
        try {
            const response = yield call(
                api.sendAuthRequest,
                "/api/reservation",
                "post",
                action.payload
            );
            yield put({
                type: actionTypes.BOOK_PROPERTY_SUCCESS,
                payload: "Your booking was a success!"
            });
        } catch (err) {
            return yield put({
                type: actionTypes.BOOK_PROPERTY_FAILURE,
                payload: err.response.data
            });
        }
    }

    yield all([
        takeLatest(actionTypes.GET_PROPERTY_INFO, getPropertyInfo),
        takeLatest(actionTypes.BOOK_PROPERTY, bookProperty)
    ]);
}
