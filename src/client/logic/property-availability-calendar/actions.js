import { PROPERTY_CALENDAR_UPDATE } from "./actionTypes";

export function calendarUpdate(payload) {
    return {
        type: PROPERTY_CALENDAR_UPDATE,
        payload
    };
}
