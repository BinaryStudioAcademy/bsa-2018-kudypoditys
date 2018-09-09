import {
    CURRENCY_RATE_GET,
    CURRENCY_SELECT,
    CURRENCIES_GET,
    LOGOUT,
    USER_CURRENCY_UPDATE
} from './actionTypes';

export function selectCurrency(payload) {
    return {
        type: CURRENCY_SELECT,
        payload
    };
}
export function changeUserCurrency(payload){
    return {
        type: USER_CURRENCY_UPDATE,
        payload
    }
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
