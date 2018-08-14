import { REGISTER_SUCCESS } from "./actionTypes";

export function registerSubmit(payload) {
    // Saga
    console.log(JSON.stringify(payload));
    return {
        type: REGISTER_SUCCESS
    };
}
