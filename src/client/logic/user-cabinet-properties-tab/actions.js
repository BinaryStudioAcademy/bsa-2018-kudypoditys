import {
    GET_CURRENT_USER_INFO,
    CHOOSE_PROPERTY,
    UNCHOOSE_PROPERTY,
    CANCEL_OWNER_BOOKING,
    UPDATE_MEALS_IN_PROPERTY_ROOM
} from "./actionTypes";

export function getUserPropertiesInfo(id) {
    return {
        type: GET_CURRENT_USER_INFO,
        payload : id
    };
}

export function updateMealsInPropertyRoom(payload) {
    return {
        type: UPDATE_MEALS_IN_PROPERTY_ROOM,
        payload
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
