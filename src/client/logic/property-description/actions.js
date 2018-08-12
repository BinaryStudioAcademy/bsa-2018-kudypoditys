import {
    PROPERTY_DESCRIPTION_UPDATE
} from './actionTypes';

export function descriptionUpdate(payload) {
    return {
        type: PROPERTY_DESCRIPTION_UPDATE,
        payload
    };
}