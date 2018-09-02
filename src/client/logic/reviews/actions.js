import {CREATE_REVIEW, UPDATE_RATING, UPDATE_REVIEW} from "./actionTypes";


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

export function ratingUpdate(payload) {
    return {
        type: UPDATE_RATING,
        payload
    };
}