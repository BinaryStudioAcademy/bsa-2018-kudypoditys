import {
    GET_USER_BOOKINGS,
    CHOOSE_BOOKING,
    UNCHOOSE_BOOKING
} from "./actionTypes";


export function getUserBookings() {
    return {
        type: GET_USER_BOOKINGS
    };
}

export function chooseBooking(booking) {
    return {
        type: CHOOSE_BOOKING,
        payload: booking
    };
}

export function unchooseBooking() {
    return {
        type: UNCHOOSE_BOOKING
    };
}
