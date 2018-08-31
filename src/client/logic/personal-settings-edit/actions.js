import {
    USER_SETTINGS_UPDATE,
    USER_SETTINGS_SEND,
    GET_CURRENT_USER,
    UPLOAD_USER_AVATAR
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

export function uploadAvatar(payload) {
    return {
        type: UPLOAD_USER_AVATAR,
        payload
    };
}
