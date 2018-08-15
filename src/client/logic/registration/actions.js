import {
    REGISTER_SUBMIT,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from './actionTypes';

export function registerSubmit(payload) {
    // Saga
    return {
        type: REGISTER_SUBMIT
    }
}

export function registerSuccess(payload) {
    return {
        type: REGISTER_SUCCESS,
        payload // = registerFeedback: { error: false, message: 'Success!' }
    }
}

export function registerFailure(payload) {
    return {
        type: REGISTER_FAILURE,
        payload // = registerFeedback: { error: true, message: 'Some error!' }
    }
}