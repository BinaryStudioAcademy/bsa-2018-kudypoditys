import {
    PROPERTY_CALENDAR_UPDATE,
    AVAILABILITY_UPDATE_SUBMIT,
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
        type: AVAILABILITY_UPDATE_SUBMIT,
        payload
    };
}

export function getUserpropertiesInfo(payload) {
    return {
        type: GET_CURRENT_USER_INFO,
        payload
    };
}
