import {
    REGISTER_SUBMIT,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from "./actionTypes";

export function registerSubmit(payload) {
    // Saga
    return {
        type: REGISTER_SUBMIT,
        payload: payload
    };
}

export function registerSuccess(payload) {
    return {
        type: REGISTER_SUCCESS,
        payload: {
            registerFeedback: {
                error: payload.error,
                message: payload.message
            }
        }
    }
}

export function registerFailure(payload) {
    return {
        type: REGISTER_FAILURE,
        payload: {
            registerFeedback: {
                error: payload.error,
                message: payload.message
            }
        }
    }
}