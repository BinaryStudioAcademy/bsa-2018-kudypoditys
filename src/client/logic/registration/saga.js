import {call, put, all, takeLatest} from "redux-saga/effects";
import * as actionTypes from "./actionTypes";
import {LOGIN_SUCCESS} from "../login/actionTypes";
import authService from "client/services/authService";
import history from "client/history";
import {registerSuccess, registerFailure} from "./actions";

function* signup(action) {
    try {
        yield call(authService.signup, action.payload);
        yield put(
            registerSuccess({
                error: false,
                message: "Signed up successfully!"
            })
        );
        // yield put({
        //     type: LOGIN_SUCCESS
        // });
        history.push("/");
    } catch (err) {
        yield put(registerFailure({error: true, message: err.message}));
    }
}

export default function* signUpSaga() {
    yield all([takeLatest(actionTypes.REGISTER_SUBMIT, signup)]);
}
