import {
    PROPERTY_LIST_ITEM_UPDATE
} from './actionTypes';

export function propertyListItemUpdate(payload) {
    return {
        type: PROPERTY_LIST_ITEM_UPDATE,
        payload
    };
}