import defaultState from 'client/logic/defaultState';
import {
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    REGISTER_UPDATE
} from './actionTypes';

export default function registrationReducer(state = defaultState.registration, action) {
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

        case REGISTER_UPDATE: {
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