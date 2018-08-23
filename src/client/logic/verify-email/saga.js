import { VERIFICATION_DATA_SEND, VERIFICATION_DATA_VERIFIED } from "./actionTypes";
import {all, put, call, takeLatest} from "redux-saga/effects";
import authService from "client/services/authService";
import { verificationDataVerified } from "./actions";

function* verify() {
    console.log("VERIFY_SAGA:", window.location);
    try {
        const resp = yield call(authService.verifyEmail, window.location.search);
        console.log(resp);
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
