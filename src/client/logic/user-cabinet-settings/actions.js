import {
    USER_SETTINGS_UPDATE,
    USER_SETTINGS_SEND,
    UPLOAD_USER_AVATAR,
    USER_PASSWORD_CHANGE,
    USER_AVATAR_DELETE
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

export function uploadAvatar(payload) {
    return {
        type: UPLOAD_USER_AVATAR,
        payload
    };
}

export function changePassword(payload) {
    return {
        type: USER_PASSWORD_CHANGE,
        payload
    };
}

export function avatarDelete() {
    return {
        type: USER_AVATAR_DELETE
    };
}
