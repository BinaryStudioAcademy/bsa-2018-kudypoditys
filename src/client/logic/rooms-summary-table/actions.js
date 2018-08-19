import {
    ROOM_SUMMARY_PRICE_GET
} from './actionType';

export const roomSummaryPriceGet = (id) => {
    return {
        type: ROOM_SUMMARY_PRICE_GET,
        payload: id
    }
};