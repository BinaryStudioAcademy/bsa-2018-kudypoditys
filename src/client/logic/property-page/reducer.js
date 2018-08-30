import defaultState from "client/logic/defaultState";
import { GET_PROPERTY_INFO_SUCCESS } from "./actionTypes";

function propertyPageReducer(state = defaultState.propertyPage, action) {
    switch (action.type) {
        case GET_PROPERTY_INFO_SUCCESS: {
            return {
                ...state,
                property: action.payload
            };
        }
        default: {
            return state;
        }
    }
}

export default propertyPageReducer;
