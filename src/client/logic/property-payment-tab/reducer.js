import { PAYMENT_TAB_UPDATE } from "./actionTypes";
import defaultState from 'client/logic/defaultState';

export default function paymentTabReducer(state = defaultState.propertyPaymentTab, action) {
    switch (action.type) {
        case PAYMENT_TAB_UPDATE: {
            return {
                ...state,
                ...action.payload
            }
        }
        default: {
            return state;
        }
    }
}