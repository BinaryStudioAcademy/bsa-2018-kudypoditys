import {PAYMENT_TAB_UPDATE, PROPERTY_REGISTER} from "./actionTypes";

export function paymentTabUpdate(payload) {
    return {
        type: PAYMENT_TAB_UPDATE,
        payload
    }
}

export function registerProperty() {
    return {
        type: PROPERTY_REGISTER
    }
}