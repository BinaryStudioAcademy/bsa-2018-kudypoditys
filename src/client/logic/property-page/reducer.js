import defaultState from "client/logic/defaultState";
import {
    GET_PROPERTY_INFO_SUCCESS,
    AVAILABILITY_INPUT_UPDATE
} from "./actionTypes";


function propertyPageReducer(state = defaultState.propertyPage, action) {
    switch (action.type) {
        case GET_PROPERTY_INFO_SUCCESS: {
            return {
                ...state,
                property: action.payload
            };
        }
        case AVAILABILITY_INPUT_UPDATE: {
            return {
                ...state,
                availabilityInput: {
                    ...state.availabilityInput,
                    ...action.payload
                }
            };
        }
        default: {
            return state;
        }
    }
}

export default propertyPageReducer;
