import {
    RESET_EMAIL_POST
} from './actionTypes';

export const submitPassword = (data) => {
    return {
        type: RESET_EMAIL_POST,
        payload: data
    }
};