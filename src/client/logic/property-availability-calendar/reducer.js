import defaultState from "client/logic/defaultState";
import {
    PROPERTY_CALENDAR_UPDATE,
    AVAILABILITY_SUBMIT_SUCCESS,
    SELECTED_ROOM_CHANGE
} from "./actionTypes";

import { CHOOSE_PROPERTY } from "../user-cabinet-properties-tab/actionTypes";

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

        case CHOOSE_PROPERTY: {
            return {
                ...state,
                ...action.payload
            };
        }

        case SELECTED_ROOM_CHANGE: {
            return {
                ...state,
                selectedRoom: action.payload
            };
        }

        default: {
            return state;
        }
    }
}
