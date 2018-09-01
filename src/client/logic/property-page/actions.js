import {
    GET_PROPERTY_INFO,
    PROPERTY_DESCRIPTION_UPDATE,
    AVAILABILITY_INPUT_UPDATE,
    BOOKING_INPUT_UPDATE,
    BOOK_PROPERTY
} from "./actionTypes";

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
