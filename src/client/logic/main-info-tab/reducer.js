import {
    PROPERTY_REGISTER,
    PROPERTY_REGISTER_SUCCESS,
    PROPERTY_REGISTER_FAILURE
} from "./actionTypes";

import defaultState from "client/logic/defaultState";

export default function propertyRegistration(state = defaultState.propertyRegistration, action) {
    switch (action.type) {
        case PROPERTY_REGISTER: {
            return state;
        }
        default: {
            return state;
        }
    }
}