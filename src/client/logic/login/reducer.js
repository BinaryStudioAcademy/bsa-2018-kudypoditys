import defaultState from "client/logic/defaultState";
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "./actionTypes";

export default function loginReducer(state = defaultState.login, action) {
    switch (action.type) {
        case LOGIN_SUCCESS: {
            return {
                ...state,
                registerSuccess: true
            };
        }

        case LOGIN_FAILURE: {
            return {
                ...state,
                registerSuccess: false
            };
        }

        case LOGOUT:
            // console.log('LOGIN REDUCER #### ', action);
            return state;
        default: {
            return state;
        }
    }
}
