import { PAYMENT_TAB_UPDATE } from "./actionTypes";

export function paymentTabUpdate(payload) {
    return {
        type: PAYMENT_TAB_UPDATE,
        payload,
    };
}