import {
    SEND_RESET_PASSWORD_EMAIL
} from './actionTypes';

export const emailResetPasswordSend = (payload) => {
    return {
        type: SEND_RESET_PASSWORD_EMAIL,
        payload
    }
};