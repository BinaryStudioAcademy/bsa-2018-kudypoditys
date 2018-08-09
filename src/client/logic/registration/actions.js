import {
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    REGISTER_UPDATE
} from './actionTypes';

export function registerSubmit(payload) {
    const _payload = {
        fullname: payload.fullname,
        email: payload.email,
        phone: payload.phone,
        errors: payload.errors
    };
    if(payload.errors.length > 0) {
        return {
            type: REGISTER_FAILURE,
            payload: _payload
        }
    } else {
        return {
            type: REGISTER_SUCCESS,
            payload: _payload
        }
    }
}

export function registerUpdate(payload) {
    return {
        type: REGISTER_UPDATE,
        payload
    }
}