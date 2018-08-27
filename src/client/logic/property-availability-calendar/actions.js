import {
    PROPERTY_CALENDAR_UPDATE,
    AVAILABILITY_UPDATE_SUBMIT
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
