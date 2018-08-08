import {
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from './actionTypes';


export function registerSubmit(payload) {
    console.log(payload);
    const safeCredentials = {
        fullname: payload.fullname,
        email: payload.email,
        phone: payload.phone
    };
    const credValid = validateCredentials(payload);
    console.log(credValid);
    return (dispatch) => {
        if(credValid.valid) {
            dispatch(registerSuccess(safeCredentials));
        } else {
            dispatch(registerFailure({ ...safeCredentials, errors: credValid.errors }))
        }
    }
}

export function registerSuccess(payload) {
    return {
        type: REGISTER_SUCCESS,
        payload
    }
}

export function registerFailure(payload) {
    return {
        type: REGISTER_FAILURE,
        payload
    }
}



function validateCredentials(credentials) {
    const { fullname, email, phone, password } = credentials;
    var errors = [];

    if(!fullname || fullname.length < 2 || !fullname.match(/^[a-z ,.'-]+$/i) || fullname.length > 64) {
        errors.push({ name: 'fullname', msg: 'Incorrect name type.' });
    }

    if(!email || !email.match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/) || email.length > 64) {
        errors.push({ name: 'email', msg: 'Incorrect email format.' });
    }

    if(!phone || !phone.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)) {
        errors.push({ name: 'phone', msg: 'Invalid phone format.' });
    }

    if(!password || !password.match(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32})/)) {
        errors.push({ name: 'password', msg: 'Password must be 8 characters long, at least 1 upscore letter and 1 number.' });
    }

    return {
        valid: errors.length > 0 ? false : true,
        errors
    }
}