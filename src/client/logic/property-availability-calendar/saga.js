import { call, put, takeLatest, all } from "redux-saga/effects";
import * as actionTypes from "./actionTypes";
import api from "../../helpers/api";

export default function* availabilitySaga() {
    function* submitAvailability(action) {
        try {
            const response = yield call(
                api.sendRequest,
                "/api/availability",
                "put",
                action.payload
            );
            yield put({
                type: actionTypes.AVAILABILITY_SUBMIT_SUCCESS,
                payload: {
                    ...response.data
                }
            });
        } catch (error) {
            yield put({ type: actionTypes.AVAILABILITY_SUBMIT_FAILURE });
        }
    }

    yield all([
        takeLatest(actionTypes.AVAILABILITY_SUBMIT, submitAvailability)
    ]);
}
