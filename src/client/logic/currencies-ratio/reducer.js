import defaultState from 'client/logic/defaultState';
import {
    CONVERT_CURRENCY_SUCCESS,
    CONVERT_CURRENCY_FAILED
} from './actionTypes';

function currencyRatioReducer(state = defaultState.currenciesRatio, action) {
    switch (action.type) {
        case CONVERT_CURRENCY_SUCCESS:
            return {
                ...state,
                uah: {
                    ...state.uah,
                    usd: action.payload
                }
            };
        case CONVERT_CURRENCY_FAILED:
            return {
                ...state,
            };
        default:
            return state;
    }
}

export default currencyRatioReducer;