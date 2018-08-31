import {CREATE_REVIEW, UPDATE_REVIEW} from "./actionTypes";


export function reviewSubmit(payload) {
    return {
        type: CREATE_REVIEW,
        payload
    };
}

export function reviewUpdate(payload) {
    return {
        type: UPDATE_REVIEW,
        payload
    };
}

