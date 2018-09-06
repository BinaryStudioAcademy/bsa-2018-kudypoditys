import {
    CREATE_PROPERTY_FAILED,
    CREATE_PROPERTY_SUCCESS
} from './actionTypes'

import defaultState from "client/logic/defaultState";

export default function propertySubmitReducer(state = defaultState.propertyRegistration, action) {
    switch (action.type) {
        case CREATE_PROPERTY_FAILED:
            return {
                error: action.payload
            }
        case CREATE_PROPERTY_SUCCESS:
            return {
                error: null
            }
        default:
            return state;
    }
}
