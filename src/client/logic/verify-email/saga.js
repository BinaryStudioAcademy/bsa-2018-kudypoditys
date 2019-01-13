import { VERIFICATION_DATA_SEND } from "./actionTypes";
import { all, put, call, takeLatest } from "redux-saga/effects";
import authService from "../../services/authService";
import { verificationDataVerified } from "./actions";
import { modalShow } from "../simple-modal/actions";
import history from "../../history";

function* verify() {
    try {
        const resp = yield call(authService.verifyEmail, history.location.search);
        if (resp.data.verified) {
            yield put(verificationDataVerified());

            yield put(modalShow(getSuccessResetPassword()));
        }
    } catch (err) {
        console.log(err);
    }
}

export default function* emailVerificationSaga() {
    yield all([takeLatest(VERIFICATION_DATA_SEND, verify)]);
}

const getSuccessResetPassword = () => ({
    header: 'Email verify success',
    content: 'Your email was successfully verified',
    buttons: [
        {
            content: 'OK',
            icon: 'check',
            positive: true,
            onClick: () => history.push('/')
        },
    ]
});
