import {
    PROPERTY_UPDATE_SUCCESS,
    PROPERTY_UPDATE_FAIL
} from "./actionTypes";
import defaultState from "../defaultState";

export default function propertySubmitReducer(state = defaultState.propertyEdit, action) {
    switch (action.type) {
        case PROPERTY_UPDATE_SUCCESS: {
            return {
                ...state,
                property: action.payload
            };
        }
        case PROPERTY_UPDATE_FAIL: {
            return (state = {});
        }
        default: {
            return state;
        }
    }
}
