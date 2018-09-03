import defaultState from "client/logic/defaultState";
import {
    PROPERTY_CALENDAR_UPDATE,
    AVAILABILITY_UPDATE_SUCCESS,
    GET_CURRENT_USER_INFO_SUCCESS
} from "./actionTypes";

export default function availabilityCalendarReducer(
    state = defaultState.availabilityCalendar,
    action
) {
    switch (action.type) {
        case PROPERTY_CALENDAR_UPDATE: {
            return {
                ...state,
                ...action.payload
            };
        }
        case AVAILABILITY_UPDATE_SUCCESS: {
            return {
                ...state,
                ...action.payload
            };
        }
        case GET_CURRENT_USER_INFO_SUCCESS: {
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
