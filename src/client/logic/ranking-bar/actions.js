import {
    RANKING_BAR_UPDATE
} from './actionTypes';

export function sortUpdate(payload) {
    return {
        type: RANKING_BAR_UPDATE,
        payload
    };
}