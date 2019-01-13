import { call, put, all, takeLatest } from "redux-saga/effects";
import * as actionTypes from "./actionTypes";
import authService from "../../services/authService";
import history from "../../history";
import { registerSuccess, registerFailure } from "./actions";
import { modalShow } from '../simple-modal/actions';

function* signup(action) {
    try {
        yield call(authService.signup, action.payload);
        yield put(
            registerSuccess({
                error: false,
                message: "Signed up successfully!"
            })
        );
        history.push("/");

        yield put(modalShow(getSuccessSignUp()))
    } catch (err) {
        yield put(registerFailure({ error: true, message: err.message }));
    }
}

export default function* signUpSaga() {
    yield all([takeLatest(actionTypes.REGISTER_SUBMIT, signup)]);
}

const getSuccessSignUp = () => ({
    header: 'Sign up success!',
    content: `
        You have successfully created your account.
        Now, to complete your registration you need to verify your email.
        Without email verification, you cannot create your property, make reviews and other.
        Please follow link in email.`,
    buttons: [
        {
            content: 'OK',
            icon: 'check',
            positive: true,
        },
    ]
});