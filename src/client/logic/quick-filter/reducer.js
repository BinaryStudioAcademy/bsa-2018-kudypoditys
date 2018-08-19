import defaultState from 'client/logic/defaultState';
import {
    QUICK_FILTERS_UPDATE
} from './actionType';

function quickFiltersReducer(state = defaultState.filters, action) {
    switch (action.type) {
        case QUICK_FILTERS_UPDATE:
            return {
                ...state.filters,
                ...action.payload
            }
        default:
            return state;

    }
}

export default quickFiltersReducer;