import defaultState from "../defaultState";
import {
    PROPERTY_CALENDAR_UPDATE,
    PROPERTY_CALENDAR_ADD,
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

        case PROPERTY_CALENDAR_ADD: {
            return {
                ...state,
                selectedRoom: {
                    ...state.selectedRoom,
                    availabilities: [...state.selectedRoom.availabilities, action.payload]
                }
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
