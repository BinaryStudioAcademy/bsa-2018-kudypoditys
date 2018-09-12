import {
    SEARCH_UPDATE,SEARCH_SUBMIT,CLEAR_SEARCH_PAGE
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
export function clearSearchPageSlice() {
    return {
        type: CLEAR_SEARCH_PAGE
    };
}
