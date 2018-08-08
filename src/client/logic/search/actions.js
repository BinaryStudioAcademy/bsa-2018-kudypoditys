import {
    SEARCH_UPDATE
} from './actionTypes';

export function searchUpdate(payload) {
    return {
        type: SEARCH_UPDATE,
        payload
    };
}