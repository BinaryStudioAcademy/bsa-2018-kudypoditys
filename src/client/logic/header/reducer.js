import defaultState from "client/logic/defaultState";
import {CURRENCY_SELECT, CURRENCIES_GET, LOGOUT_SUCCESS} from "./actionTypes";

import {GET_CURRENT_USER_SUCCESS} from "../login/actionTypes";

function headerReducer(state = defaultState.header, action) {
    switch (action.type) {
        case CURRENCY_SELECT:
            return { ...state,
                    selectedCurrency: action.payload.selectedCurrency,
                    rate: action.payload.rate
                 };
        case CURRENCIES_GET:
            return {
                    ...state,
                    ...state.selectedCurrency,
                    ...state.currency,
                    ...state.rate
                };

        case GET_CURRENT_USER_SUCCESS:
            return { ...state, currentUser: action.payload };

        case LOGOUT_SUCCESS:
            return { ...state, currentUser: null };

        default:
            return state;
    }
}


export default headerReducer;

const MOCK_CURRENCIES = [
    {
        text: "UA",
        value: 1
    },
    {
        text: "USA",
        value: 2
    }
];
