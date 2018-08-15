import {
    REGISTER_SUBMIT,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from "./actionTypes";
import api from "../.././helpers/api";
import cookies from "browser-cookies";

export function registerSubmit(payload) {
    // Saga
    api.sendRequest("/signup", "post", payload)
        .then(response => {
            const { token, expiresIn } = response.data;
            cookies.set("accessToken", token, { expires: new Date(expiresIn) });
            return {
                type: REGISTER_SUCCESS,
                payload: {
                    error: false,
                    message: "Successfully signed up!"
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
