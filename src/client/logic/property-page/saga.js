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

    yield all([takeLatest(actionTypes.GET_PROPERTY_INFO, getPropertyInfo)]);
}
