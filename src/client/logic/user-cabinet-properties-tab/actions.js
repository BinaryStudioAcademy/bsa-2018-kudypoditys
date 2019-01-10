import {
    GET_CURRENT_USER_INFO,
    CHOOSE_PROPERTY,
    UNCHOOSE_PROPERTY,
    CANCEL_OWNER_BOOKING
} from "./actionTypes";

export function getUserPropertiesInfo(id) {
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

export function cancelBooking(data) {
    return {
        type: CANCEL_OWNER_BOOKING,
        payload: data
    };
}
