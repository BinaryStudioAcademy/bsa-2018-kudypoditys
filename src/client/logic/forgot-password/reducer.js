import defaultState from 'client/logic/defaultState';
import {
    RESET_EMAIL_SUCSESS,
    RESET_EMAIL_FAILED,
    RESET_EMAIL_POST
} from './actionTypes';
import { emailInput } from './actions'

function emailInputReducer(state = defaultState, action) {
    switch (action.type) {
        case RESET_EMAIL_SUCSESS:
            console.log('0000')
            return {
                ...state.rooms,
                ...action.payload
            }
        default:
            return state;

    }
}

export default emailInputReducer;