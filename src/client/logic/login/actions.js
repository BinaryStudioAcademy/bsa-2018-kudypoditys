import {LOGIN, GET_CURRENT_USER} from "./actionTypes";

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
