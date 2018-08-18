import { REGISTER_SUBMIT } from "./actionTypes";

export function registerSubmit(payload) {
    // Saga
    return {
        type: REGISTER_SUBMIT,
        payload: payload
    };
}
