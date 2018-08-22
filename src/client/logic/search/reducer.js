import defaultState from "client/logic/defaultState";
import { SEARCH_UPDATE } from "./actionTypes";

function searchReducer(state = defaultState.search, action) {
    switch (action.type) {
        case SEARCH_UPDATE: {
            action.payload.checkIn = null;
            action.payload.checkOut = null;
            return {
                ...state,
                ...action.payload
            };
        }
        default: {
            return state;
        }
    }
}

export default searchReducer;
