import defaultState from 'client/logic/defaultState';
import {
    ROOM_SUMMARY_PRICE_GET
} from './actionType';

function roomSummaryReducer(state = defaultState.rooms, action) {
    switch (action.type) {
        case ROOM_SUMMARY_PRICE_GET:
            return {
                ...state.rooms,
                ...action.payload
            }
        default:
            return state;

    }
}

export default roomSummaryReducer;