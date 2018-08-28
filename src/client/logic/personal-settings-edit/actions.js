import { USER_SETTINGS_UPDATE, USER_SETTINGS_SEND } from "./actionTypes";

export function updateUserSettings(payload) {
    return {
        type: USER_SETTINGS_UPDATE,
        payload,
    };
}

export function sendUserSettings(payload) {
    return {
        type: USER_SETTINGS_SEND,
        payload,
    };
}
