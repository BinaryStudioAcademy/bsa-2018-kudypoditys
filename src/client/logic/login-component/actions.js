import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from './actionTypes';

export function loginSubmit(payload) {
    console.log(payload);
    const credentials = {
        email: payload.email,
        password: payload.password
    };
    const credentialsValid = validateCredentials(credentials);
    return (dispatch) => {
        if (!credentialsValid.errors.length) {
            dispatch(loginSuccess(credentials));
        } else {
            dispatch(loginFailure({ errors: credentialsValid.errors }))
        }
    }
}

export function loginSuccess(payload) {
    return {
        type: LOGIN_SUCCESS,
        payload
    }
}

export function loginFailure(payload) {
    return {
        type: LOGIN_FAILURE,
        payload
    }
}

function validateCredentials(credentials) {
    const { email, password } = credentials;
    var errors = [];

    if (!email) {
        errors.push({ field: 'email', message: 'Please enter your e-mail' });
    }
    else
        if (!email.match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/) || email.length > 64) {
            errors.push({ field: 'email', message: 'Please enter a valid e-mail' });
        }

    if (!password) {
        errors.push({ field: 'password', message: 'Please enter your password' });
    }
    else
        if (!password.match(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32})/)) {
            errors.push({ field: 'password', message: 'Your password must be at least 8 characters, at least 1 upscore letter and 1 number' });
        }

    return {
        errors
    }
}