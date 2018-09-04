
import {PAGINATION_UPDATE} from "./actionType";

function paginationReducer(state, action) {
    switch (action.type) {
        case PAGINATION_UPDATE:
            return {
                ...state.activePage,
                ...action.payload
            };
        default:
            return state;
    }
}

export default paginationReducer;
