import {
    PROPERTY_PHOTO_UPDATE
} from './actionTypes';


export function imageUpdate(payload) {
    return {
        type: PROPERTY_PHOTO_UPDATE,
        payload
    };
}