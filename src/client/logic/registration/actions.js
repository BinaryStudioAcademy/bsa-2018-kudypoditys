import {
    REGISTER_SUCCESS
} from './actionTypes';

export function registerSubmit(payload) {
    // Saga
    return {
        type: REGISTER_SUCCESS
    }
}