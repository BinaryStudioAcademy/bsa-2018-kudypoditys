import { RESET_PASSWORD, SAVE_URL_QUERY } from "./actionTypes";

export const passwordReset = (payload) => {
    return {
        type: RESET_PASSWORD,
        payload
    }
};

export const urlQuerySave = (payload) => {
    return {
        type: SAVE_URL_QUERY,
        payload
    };
}
