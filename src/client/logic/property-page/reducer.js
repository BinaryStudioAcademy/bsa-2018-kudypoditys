import defaultState from "client/logic/defaultState";
import {
    GET_PROPERTY_INFO_SUCCESS,
    AVAILABILITY_INPUT_UPDATE,
    BOOKING_INPUT_UPDATE,
    BOOK_PROPERTY_SUCCESS,
    BOOK_PROPERTY_FAILURE
} from "./actionTypes";

function propertyPageReducer(state = defaultState.propertyPage, action) {
    switch (action.type) {
        case GET_PROPERTY_INFO_SUCCESS: {
            return {
                ...state,
                property: action.payload
            };
        }

        case BOOK_PROPERTY_FAILURE: {
            return {
                ...state,
                bookingInput: {
                    ...state.bookingInput,
                    message: "",
                    error: action.payload
                }
            };
        }

        case BOOK_PROPERTY_SUCCESS: {
            return {
                ...state,
                bookingInput: {
                    ...state.bookingInput,
                    message: action.payload,
                    error: ""
                }
            };
        }

        case BOOKING_INPUT_UPDATE: {
            return {
                ...state,
                bookingInput: {
                    ...state.bookingInput,
                    error: "",
                    message: "",
                    ...action.payload
                }
            };
        }

        case AVAILABILITY_INPUT_UPDATE: {
            return {
                ...state,
                availabilityInput: {
                    ...state.availabilityInput,
                    ...action.payload
                }
            };
        }

        default: {
            return state;
        }
    }
}

export default propertyPageReducer;
