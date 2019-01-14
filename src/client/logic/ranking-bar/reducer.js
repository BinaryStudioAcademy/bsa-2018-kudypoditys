import defaultState from "../defaultState";
import { RANKING_BAR_UPDATE } from "./actionTypes";

function sortTypeReducer(state = defaultState.sortType, action) {
    switch (action.type) {
        case RANKING_BAR_UPDATE:
            return {
                ...state.sortType,
                ...action.payload
            };

        default: {
            return state;
        }
    }
}

export default sortTypeReducer;
