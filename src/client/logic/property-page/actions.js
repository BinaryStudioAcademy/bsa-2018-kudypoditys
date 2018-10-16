import {
    GET_PROPERTY_INFO,
    PROPERTY_DESCRIPTION_UPDATE,
    AVAILABILITY_INPUT_UPDATE,
    BOOKING_INPUT_UPDATE,
    BOOK_PROPERTY,
    CHECK_AVAILABILITY,
    GET_ROOMS_INFO,
    CLEAR_PROPERTY_PAGE,
    ROOMS_SELECTED_AMOUNT_UPDATE,
    ROOM_DESCRIPTION_COLLAPSE_TOGGLE
} from './actionTypes';

export function descriptionUpdate(payload) {
    return {
        type: PROPERTY_DESCRIPTION_UPDATE,
        payload
    };
}

export function availabilityInputUpdate(value) {
    return {
        type: AVAILABILITY_INPUT_UPDATE,
        payload: value
    };
}

export function bookingInputUpdate(value) {
    return {
        type: BOOKING_INPUT_UPDATE,
        payload: value
    };
}

export function getPropertyInfoById(id) {
    return {
        type: GET_PROPERTY_INFO,
        payload: id
    };
}

export function bookProperty(value) {
    return {
        type: BOOK_PROPERTY,
        payload: value
    };
}

export function checkAvailability(value) {
    return {
        type: CHECK_AVAILABILITY,
        payload: value
    };
}

export function getRoomsInfo(propertyId, checkIn, checkOut) {
    return {
        type: GET_ROOMS_INFO,
        payload: {
            propertyId,
            checkIn,
            checkOut
        }
    };
}

export function clearPropertyPageSlice() {
    return {
        type: CLEAR_PROPERTY_PAGE
    };
}

export function roomsSelectedAmountUpdate(roomId, selectedRoomsAmount, rooms) {
    return {
        type: ROOMS_SELECTED_AMOUNT_UPDATE,
        payload: {
            roomId,
            selectedRoomsAmount,
            rooms
        }
    };
}


export function toggleDescriptionCollapse(roomId) {
    return {
        type: ROOM_DESCRIPTION_COLLAPSE_TOGGLE,
        payload: {
            roomId
        }
    };
}
