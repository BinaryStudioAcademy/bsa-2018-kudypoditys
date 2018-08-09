import defaultState from 'client/logic/defaultState';
import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from './actionTypes';

export default function loginReducer(state = defaultState.login, action) {
    console.log(state, action);
    switch (action.type) {
        case LOGIN_SUCCESS: {
            return {
                ...state,
                ...action.payload
            }
        }

        case LOGIN_FAILURE: {
            return {
                ...state,
                ...action.payload
            }
        }

        default: {
            return state;
        }
    }
}