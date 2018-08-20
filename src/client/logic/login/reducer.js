import defaultState from "client/logic/defaultState";
import { LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionTypes";

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

        default: {
            return state;
        }
    }
}
