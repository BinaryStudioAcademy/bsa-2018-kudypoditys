import defaultState from "client/logic/defaultState";
import {
    GET_PROPERTY_INFO_SUCCESS,
    AVAILABILITY_INPUT_UPDATE,
    BOOKING_INPUT_UPDATE,
    BOOK_PROPERTY_SUCCESS,
    BOOK_PROPERTY_FAILURE,
    CHECK_AVAILABILITY_SUCCESS,
    CHECK_AVAILABILITY_FAILURE,
    GET_ROOMS_INFO_SUCCESS,
    CLEAR_PROPERTY_PAGE,
    ROOMS_SELECTED_AMOUNT_UPDATE
} from "./actionTypes";

import { SEARCH_UPDATE } from "../search/actionTypes";

function propertyPageReducer(state = defaultState.propertyPage, action) {
    switch (action.type) {
        case GET_PROPERTY_INFO_SUCCESS: {
            return {
                ...state,
                property: action.payload
            };
        }

        case CLEAR_PROPERTY_PAGE: {
            return {
                ...state,
                property: null
            };
        }

        case GET_ROOMS_INFO_SUCCESS: {
            return {
                ...state,
                rooms: action.payload
            };
        }

        case SEARCH_UPDATE: {
            return {
                ...state,
                availabilityInput: {
                    ...state.availabilityInput,
                    ...action.payload
                },
                bookingInput: {
                    ...state.bookingInput,
                    ...action.payload
                }
            };
        }

        case CHECK_AVAILABILITY_SUCCESS: {
            return {
                ...state,
                availabilityInput: {
                    ...state.availabilityInput,
                    result: action.payload,
                    error: ""
                }
            };
        }

        case CHECK_AVAILABILITY_FAILURE: {
            return {
                ...state,
                availabilityInput: {
                    ...state.availabilityInput,
                    result: null,
                    error: action.payload
                }
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
                },
                availabilityInput: {
                    ...state.availabilityInput,
                    ...action.payload,
                    error: "",
                    result: null
                }
            };
        }

        case AVAILABILITY_INPUT_UPDATE: {
            return {
                ...state,
                availabilityInput: {
                    ...state.availabilityInput,
                    ...action.payload,
                    error: ""
                },
                bookingInput: {
                    ...state.bookingInput,
                    error: "",
                    message: "",
                    ...action.payload
                }
            };
        }

        // TODO
        case ROOMS_SELECTED_AMOUNT_UPDATE: {
            return {
                ...state,
                bookingInput: {
                    ...state.bookingInput,
                    roomId: action.payload.roomId,
                    roomsAmount: action.payload.selectedRoomsAmount
                },
                rooms: action.payload.rooms
            }
        }

        default: {
            return state;
        }
    }
}

export default propertyPageReducer;
