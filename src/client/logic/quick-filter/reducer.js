import defaultState from "../defaultState";
import { QUICK_FILTERS_UPDATE } from "./actionType";

function quickFiltersReducer(state = defaultState.search, action) {
    switch (action.type) {
        case QUICK_FILTERS_UPDATE:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}

export default quickFiltersReducer;
