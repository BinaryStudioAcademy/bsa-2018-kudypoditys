import defaultState from "../defaultState";
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
    ROOMS_SELECTED_AMOUNT_UPDATE,
    ROOM_DESCRIPTION_COLLAPSE_TOGGLE
} from "./actionTypes";
import {
    SEARCH_UPDATE
} from "../search/actionTypes";

function propertyPageReducer(state = defaultState.propertyPage, action) {
    switch (action.type) {
        case GET_PROPERTY_INFO_SUCCESS:
            {
                return {
                    ...state,
                    property: action.payload
                };
            }

        case CLEAR_PROPERTY_PAGE:
            {
                return {
                    ...state,
                    property: null
                };
            }

        case GET_ROOMS_INFO_SUCCESS:
            {
                return {
                    ...state,
                    rooms: action.payload
                };
            }

        case SEARCH_UPDATE:
            {
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

        case CHECK_AVAILABILITY_SUCCESS:
            {
                return {
                    ...state,
                    availabilityInput: {
                        ...state.availabilityInput,
                        result: action.payload,
                        error: ""
                    }
                };
            }

        case CHECK_AVAILABILITY_FAILURE:
            {
                return {
                    ...state,
                    availabilityInput: {
                        ...state.availabilityInput,
                        result: null,
                        error: action.payload
                    }
                };
            }

        case BOOK_PROPERTY_FAILURE:
            {
                return {
                    ...state,
                    bookingInput: {
                        ...state.bookingInput,
                        message: "",
                        error: action.payload
                    }
                };
            }

        case BOOK_PROPERTY_SUCCESS:
            {
                return {
                    ...state,
                    bookingInput: {
                        ...state.bookingInput,
                        message: action.payload,
                        error: ""
                    }
                };
            }

        case BOOKING_INPUT_UPDATE:
            {
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

        case AVAILABILITY_INPUT_UPDATE:
            {
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
        case ROOMS_SELECTED_AMOUNT_UPDATE:
            {
                return {
                    ...state,
                    bookingInput: {
                        ...state.bookingInput,
                        roomId: action.payload.roomId,
                    },
                    rooms: action.payload.rooms
                }
            }

        case ROOM_DESCRIPTION_COLLAPSE_TOGGLE:
            {
                const roomsToInsert = state.rooms.map((item) => {
                    if (item.id !== action.payload.roomId) {
                        // This isn't the item we care about - keep it as-is
                        return item;
                    }

                    // Otherwise, this is the one we want - return an updated value
                    return {
                        ...item,
                        descriptionCollapsed: !item.descriptionCollapsed
                    };
                });
                return {
                    ...state,
                    rooms: roomsToInsert
                }
            }

        default:
            {
                return state;
            }
    }
}

export default propertyPageReducer;
