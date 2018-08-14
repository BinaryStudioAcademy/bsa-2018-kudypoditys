import defaultState from 'client/logic/defaultState';
import {
    CURENCY_SELECT,
    CURRENCIES_GET,
    CURRENT_USER_GET
} from './actionTypes';

function headerReducer(state = defaultState.header, action) {
    switch (action.type) {
        case CURENCY_SELECT:
            return { ...state, selectedCurrency: action.payload };
        case CURRENCIES_GET:
            return { ...state, currencies: [...MOCK_CURRENCIES] };
        case CURRENT_USER_GET:
            return { ...state, currentUser: action.payload }
        default:
            return state;
    }
}

export default headerReducer;

const MOCK_CURRENCIES = [{
    text: 'UA',
    value: 1
}, {
    text: 'USA',
    value: 2
}];
