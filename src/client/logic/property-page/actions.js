import { GET_PROPERTY_INFO, PROPERTY_DESCRIPTION_UPDATE } from "./actionTypes";

export function descriptionUpdate(payload) {
    return {
        type: PROPERTY_DESCRIPTION_UPDATE,
        payload
    };
}

export function getPropertyInfoById(id) {
    return {
        type: GET_PROPERTY_INFO,
        payload: id
    };
}
