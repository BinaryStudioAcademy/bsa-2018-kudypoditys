import {
    ROOM_SUMMARY_PRICE_GET,
    GET_ROOMS
} from './actionTypes';

export const roomSummaryPriceGet = (id) => {
    return {
        type: ROOM_SUMMARY_PRICE_GET,
        payload: id
    }
};

export const roomsGet = () => {
    return {
        type: GET_ROOMS,
    }
};