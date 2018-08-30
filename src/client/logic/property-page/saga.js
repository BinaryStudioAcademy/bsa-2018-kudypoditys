import { call, put, all, takeLatest } from "redux-saga/effects";
import * as actionTypes from "./actionTypes";
import api from "../../helpers/api";

export default function* propertyPageSaga() {
    function* getPropertyInfo(action) {}

    yield all([takeLatest(actionTypes.GET_PROPERTY_INFO, getPropertyInfo)]);
}
