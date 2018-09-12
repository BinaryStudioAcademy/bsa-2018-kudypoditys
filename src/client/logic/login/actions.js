import { LOGIN, GET_CURRENT_USER, RESET_LOGIN } from "./actionTypes";

export function loginSubmit(payload) {
    return {
        type: LOGIN,
        payload
    };
}

export function getCurrentUser() {
    return {
        type: GET_CURRENT_USER
    };
}

export function reset() {
    return {
        type: RESET_LOGIN
    }
}