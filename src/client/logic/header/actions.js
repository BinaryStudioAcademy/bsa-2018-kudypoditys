import {
    CURENCY_SELECT,
    CURRENCIES_GET,
    CURRENT_USER_GET
} from './actionTypes';

export function selectCurrency(payload) {
    return {
        type: CURENCY_SELECT,
        payload
    };
}

export function getCurrencies() {
    return {
        type: CURRENCIES_GET
    }
}

export function getCurrentUser() {
    return {
        type: CURRENT_USER_GET
    }
}
