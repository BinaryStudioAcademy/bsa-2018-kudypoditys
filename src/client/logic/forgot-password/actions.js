import {
    RESET_EMAIL_POST
} from './actionTypes';

export const emailInput = (email) => {
    return {
        type: RESET_EMAIL_POST,
        payload: email
    }
};