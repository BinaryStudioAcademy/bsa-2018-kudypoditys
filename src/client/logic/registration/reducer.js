import defaultState from 'client/logic/defaultState';
import {
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from './actionTypes';

export default function registrationReducer(state = defaultState.registration, action) {
    console.log(state, action);
    switch (action.type) {
        case REGISTER_SUCCESS: {
            return {
                ...state,
                ...action.payload
            }
        }

        case REGISTER_FAILURE: {
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