import {
    SEARCH_RESULT_UPDATE
} from "./actionTypes";

export function searchResultUpdate(payload) {
    return {
        type: SEARCH_RESULT_UPDATE,
        payload
    };
}
