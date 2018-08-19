import { CREATE_POPERTY } from "./actionTypes";

export function propertySubmit(payload) {
    return {
        type: CREATE_POPERTY,
        payload
    };
}


