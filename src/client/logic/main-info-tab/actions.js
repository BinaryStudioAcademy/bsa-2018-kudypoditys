import { CREATE_PROPERTY } from "./actionTypes";

export function propertySubmit(payload) {
    return {
        type: CREATE_PROPERTY,
        payload
    };
}


