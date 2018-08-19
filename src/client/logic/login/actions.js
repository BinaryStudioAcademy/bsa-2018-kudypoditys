import { LOGIN } from "./actionTypes";

export function loginSubmit(payload) {
    return {
        type: LOGIN,
        payload
    };
}
