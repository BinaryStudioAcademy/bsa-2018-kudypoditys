import {
    SLIDE_UPDATE
} from './actionTypes';

export function slideUpdate(payload) {
    return {
        type: SLIDE_UPDATE,
        payload
    }
}