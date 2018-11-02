import {
    PROPERTY_CALENDAR_UPDATE,
    PROPERTY_CALENDAR_ADD,
    AVAILABILITY_SUBMIT,
    SELECTED_ROOM_CHANGE
} from "./actionTypes";

export function calendarUpdate(payload) {
    return {
        type: PROPERTY_CALENDAR_UPDATE,
        payload
    };
}

export function calendarAdd(payload) {
    return {
        type: PROPERTY_CALENDAR_ADD,
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
