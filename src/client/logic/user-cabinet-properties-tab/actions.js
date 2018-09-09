import {
    GET_CURRENT_USER_INFO,
    CHOOSE_PROPERTY,
    UNCHOOSE_PROPERTY
} from "./actionTypes";

export function getUserpropertiesInfo(id) {
    return {
        type: GET_CURRENT_USER_INFO,
        id
    };
}

export function chooseProperty(property) {
    return {
        type: CHOOSE_PROPERTY,
        payload: property
    };
}

export function unchooseProperty() {
    return {
        type: UNCHOOSE_PROPERTY
    };
}
