import { VERIFICATION_DATA_SEND, VERIFICATION_DATA_VERIFIED } from "./actionTypes";
import {all, put, call, takeLatest} from "redux-saga/effects";
import authService from "client/services/authService";
import { verificationDataVerified } from "./actions";
import history from "client/history";

function* verify() {
    console.log("VERIFY_SAGA:", history.location.search);
    try {
        const resp = yield call(authService.verifyEmail, history.location.search);
        if(resp.data.verified) {
            yield put(verificationDataVerified());
        }
    } catch (err) {
        console.log(err);
    }
}

export default function* emailVerificationSaga() {
    yield all([takeLatest(VERIFICATION_DATA_SEND, verify)]);
}
