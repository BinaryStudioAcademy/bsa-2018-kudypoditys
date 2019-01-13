import {
    CURENCY_SELECT,
    CURRENCIES_GET,
    LOGOUT
} from "./actionTypes";

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

export function logout() {
    return {
        type: LOGOUT
    }
}
