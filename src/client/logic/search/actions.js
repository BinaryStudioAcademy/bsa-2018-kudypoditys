import {
    SEARCH_UPDATE,SEARCH_SUBMIT,
} from './actionTypes';

export function searchUpdate(payload) {

    return {
        type: SEARCH_UPDATE,
        payload
    };
}
export function searchSubmit(payload) {

    return {
        type: SEARCH_SUBMIT,
        payload
    };
}
