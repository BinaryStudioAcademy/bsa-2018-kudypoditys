import {
    PROPERTY_CALENDAR_UPDATE,
    AVAILABILITY_SUBMIT,
    SELECTED_ROOM_CHANGE
} from "./actionTypes";

export function calendarUpdate(payload) {
    return {
        type: PROPERTY_CALENDAR_UPDATE,
        payload
    };
}

export function availabilitySubmit(payload) {
    return {
        type: AVAILABILITY_SUBMIT,
        payload
    };
}

export function selectedRoomChange(payload) {
    return {
        type: SELECTED_ROOM_CHANGE,
        payload
    };
}
