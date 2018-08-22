import {
    CREATE_PROPERTY_FAILED,
    CREATE_PROPERTY_SUCCESS,
    UPDATE_PROPERTY
} from './actionTypes'

import defaultState from "client/logic/defaultState";

export default function propertySubmitReducer(state = defaultState.propertyRegistration, action) {
    switch (action.type) {
        case UPDATE_PROPERTY: {
            return {
                ...state,
                ...action.payload
            }
        }
        case CREATE_PROPERTY_FAILED: {
            return {
                ...state,
                ...action.payload
            }
        }
        case CREATE_PROPERTY_SUCCESS: {
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
