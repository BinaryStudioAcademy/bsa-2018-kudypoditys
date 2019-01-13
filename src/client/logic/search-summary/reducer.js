import defaultState from "../defaultState";
import {
    SEARCH_RESULT_UPDATE
} from "./actionTypes";

function summaryReducer(state = defaultState.searchResults, action) {
    switch (action.type) {
        case SEARCH_RESULT_UPDATE: {
            return {
                ...state.searchResults,
                ...action.payload

            };
        }

        default: {
            return state;
        }
    }
}

export default summaryReducer;
