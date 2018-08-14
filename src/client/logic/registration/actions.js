import { REGISTER_SUCCESS } from "./actionTypes";
import api from "../.././helpers/api";

export function registerSubmit(payload) {
    // Saga
    api.sendRequest("/signup", "post", payload)
        .then(response => {
            console.log("DATA: " + JSON.stringify(response.data));
        })
        .catch(err => {
            console.log(JSON.stringify(err.data));
        });

    return {
        type: REGISTER_SUCCESS
    };
}
