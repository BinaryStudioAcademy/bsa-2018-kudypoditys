import defaultState from "client/logic/defaultState";
import { PROPERTY_CALENDAR_UPDATE } from "./actionTypes";

function propertyCalendarReducer(
    state = defaultState.propertyCalendar,
    action
) {
    switch (action.type) {
        case PROPERTY_CALENDAR_UPDATE: {
            return {
                ...state,
                ...action.payload
            };
        }
        default: {
            return state;
        }
    }
}

export default propertyCalendarReducer;
