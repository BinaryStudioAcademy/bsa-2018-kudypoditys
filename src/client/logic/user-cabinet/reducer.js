import defaultState from "client/logic/defaultState";
import { GET_CURRENT_USER_SUCCESS } from "../login/actionTypes";
import {
    CHOOSE_BOOKING,
    UNCHOOSE_BOOKING,
    GET_USER_BOOKINGS_SUCCESS
} from "./actionTypes";

export default function userCabinetReducer(
    state = defaultState.userCabinet,
    action
) {
    switch (action.type) {
        case GET_CURRENT_USER_SUCCESS: {
            return {
                ...state,
                user: action.payload
            };
        }

        case CHOOSE_BOOKING: {
            return {
                ...state,
                activeBooking: action.payload
            };
        }

        case UNCHOOSE_BOOKING: {
            return {
                ...state,
                activeBooking: null
            };
        }

        case GET_USER_BOOKINGS_SUCCESS: {
            return {
                ...state,
                bookings: action.payload
            };
        }

        default: {
            return state;
        }
    }
}
