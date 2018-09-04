import {
    PROPERTY_CALENDAR_UPDATE,
    AVAILABILITY_UPDATE,
    GET_CURRENT_USER_INFO
} from "./actionTypes";

export function calendarUpdate(payload) {
    return {
        type: PROPERTY_CALENDAR_UPDATE,
        payload
    };
}

export function availabilitySubmit(payload) {
    return {
        type: AVAILABILITY_UPDATE,
        payload
    };
}

export function getUserpropertiesInfo(id) {
    return {
        type: GET_CURRENT_USER_INFO,
        id
    };
}
