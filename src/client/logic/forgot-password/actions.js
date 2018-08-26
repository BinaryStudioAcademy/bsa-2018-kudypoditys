import {
    RESET_EMAIL_POST
} from './actionTypes';

export const emailInput = (id) => {
    console.log(id)
    return {
        type: RESET_EMAIL_POST,
        payload: id
    }
};