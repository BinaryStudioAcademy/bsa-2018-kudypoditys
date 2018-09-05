import {
    CURRENCY_RATE_GET,
    CURRENCY_SELECT,
    CURRENCIES_GET,
    LOGOUT
} from './actionTypes';

export function selectCurrency(payload) {
    return {
        type: CURRENCY_RATE_GET,
        payload
    };
}

export function getCurrencies() {
    return {
        type: CURRENCIES_GET
    }
}

export function logout() {
    return {
        type: LOGOUT
    }
}
