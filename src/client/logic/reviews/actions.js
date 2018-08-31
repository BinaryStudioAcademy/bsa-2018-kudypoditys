import { CREATE_REVIEW,UPDATE_PROPERTY } from "./actionTypes";

export function reviewSubmit(payload) {
    return {
        type: CREATE_REVIEW,
        payload
    };
}

export function reviewUpdate(payload) {
    return {
        type: UPDATE_PROPERTY,
        payload
    };
}

