import {
    SLIDE_CHANGE
} from './actionTypes';

export function slideChange(payload) {
    return {
        type: SLIDE_CHANGE,
        payload
    }
}