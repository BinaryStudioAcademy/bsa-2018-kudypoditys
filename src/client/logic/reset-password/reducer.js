import defaultState from "../defaultState";
import { RESET_PASSWORD_SUCSESS, SAVE_URL_QUERY, RESET_PASSWORD_FAILED, RESET_PASSWORD } from "./actionTypes";

function resetPasswordReducer(state = defaultState.resetPassword, action) {
    switch (action.type) {
        case RESET_PASSWORD:
            return {
                ...state,
                isLoading: true
            }
        case RESET_PASSWORD_SUCSESS:
            return {
                passwordReseted: true,
                isLoading: false
            }
        case RESET_PASSWORD_FAILED:
            return {
                ...state,
                passwordReseted: false,
                error: action.payload,
                isLoading: false
            }
        case SAVE_URL_QUERY:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;

    }
}

export default resetPasswordReducer;
