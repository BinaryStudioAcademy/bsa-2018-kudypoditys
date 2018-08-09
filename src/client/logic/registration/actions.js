import {
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from './actionTypes';

export function registerSubmit(payload) {
    console.log(payload);
    if(payload.errors.length > 0) {
        return {
            type: REGISTER_FAILURE,
            payload
        }
    } else {
        return {
            type: REGISTER_SUCCESS,
            payload
        }
    }
}

export function registerUpdate(payload) {
    return {
        type: "REGISTER:UPDATE",
        payload
    }
}