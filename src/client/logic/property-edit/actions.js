import {
    PROPERTY_UPDATE
} from './actionTypes';

export function propertyUpdate(payload) {
    return {
        type: PROPERTY_UPDATE,
        payload
    };
}