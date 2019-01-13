import defaultState from "../defaultState";
import {
    SEND_RESET_PASSWORD_EMAIL,
    SEND_RESET_PASSWORD_EMAIL_SUCCESS,
    SEND_RESET_PASSWORD_EMAIL_FAILED
} from "./actionTypes";

function forgotPasswordReducer(state = defaultState.forgotPassword, action) {
    switch (action.type) {
        case SEND_RESET_PASSWORD_EMAIL:
            return {
                ...state,
                isLoading: true
            };
        case SEND_RESET_PASSWORD_EMAIL_SUCCESS:
            return {
                emailSendSuccess: true,
                isLoading: false
            };
        case SEND_RESET_PASSWORD_EMAIL_FAILED:
            return {
                isLoading: false,
                emailSendSuccess: false,
                error: action.payload
            };
        default:
            return state;
    }
}

export default forgotPasswordReducer;