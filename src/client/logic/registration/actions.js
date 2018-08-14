import {
    REGISTER_SUBMIT,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from "./actionTypes";
import api from "../.././helpers/api";

export function registerSubmit(payload) {
    // Saga
    api.sendRequest("/signup", "post", payload)
        .then(response => {
            return {
                type: REGISTER_SUCCESS,
                payload: {
                    error: false,
                    message: "Successfully signed up!",
                    jwtToken: response.data
                }
            };
        })
        .catch(err => {
            return {
                type: REGISTER_FAILURE,
                payload: {
                    error: true,
                    message: err.data
                }
            };
        });
}
