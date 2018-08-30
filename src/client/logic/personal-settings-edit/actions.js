import {
    USER_SETTINGS_UPDATE,
    USER_SETTINGS_SEND,
    GET_CURRENT_USER
} from "./actionTypes";

export function updateUserSettings(payload) {
    return {
        type: USER_SETTINGS_UPDATE,
        payload
    };
}

export function sendUserSettings(payload) {
    return {
        type: USER_SETTINGS_SEND,
        payload
    };
}

export function getUserSettings() {
    return {
        type: GET_CURRENT_USER
    };
}
