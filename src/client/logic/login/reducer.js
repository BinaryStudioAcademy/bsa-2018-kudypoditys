import defaultState from "client/logic/defaultState";
import { LOGIN_SUCCESS, LOGIN_FAILURE, RESET_LOGIN } from "./actionTypes";

export default function loginReducer(state = defaultState.login, action) {
    switch (action.type) {
        case LOGIN_SUCCESS: {
            return {
                ...state,
                loginSuccess: true
            };
        }

        case LOGIN_FAILURE: {
            return {
                ...state,
                loginSuccess: false,
                ...action.payload
            };
        }

        case RESET_LOGIN:
            return defaultState.login;

        default: {
            return state;
        }
    }
}
