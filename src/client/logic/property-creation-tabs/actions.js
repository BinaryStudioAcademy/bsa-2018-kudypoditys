import {CREATE_PROPERTY, UPDATE_PROPERTY} from "./actionTypes";


export function propertySubmit(payload) {
    return {
        type: CREATE_PROPERTY,
        payload
    };
}

export function propertyUpdate(payload) {
    return {
        type: UPDATE_PROPERTY,
        payload
    };
}

