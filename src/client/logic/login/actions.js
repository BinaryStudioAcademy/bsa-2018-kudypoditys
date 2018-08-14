import { LOGIN_SUCCESS } from "./actionTypes";
import authService from 'client/services/authService';

export function loginSubmit(payload) {
    // WE NEED SAGA! GIVE US SAGA!
    authService.login(payload.email, payload.password);

    return {
        type: LOGIN_SUCCESS
    };
}
