import defaultState from "../defaultState";
import { CURENCY_SELECT, LOGOUT_SUCCESS } from "./actionTypes";

import { GET_CURRENT_USER_SUCCESS } from "../login/actionTypes";

function headerReducer(state = defaultState.header, action) {
    switch (action.type) {
        case CURENCY_SELECT:
            return { ...state, selectedCurrency: action.payload };

        case GET_CURRENT_USER_SUCCESS:
            return { ...state, currentUser: action.payload };

        case LOGOUT_SUCCESS:
            return { ...state, currentUser: null };

        default:
            return state;
    }
}

export default headerReducer;
