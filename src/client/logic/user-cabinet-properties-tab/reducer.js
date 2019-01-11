// import defaultState from "client/logic/defaultState";
import {
    GET_CURRENT_USER_INFO_SUCCESS,
    CHOOSE_PROPERTY,
    UNCHOOSE_PROPERTY
} from "./actionTypes";

export default function userCabinetPropertiesReducer(
    state = {},
    action
) {
    switch (action.type) {

        case GET_CURRENT_USER_INFO_SUCCESS: {
            return {
                ...state,
                properties: action.payload.propetyResponse
            };
        }
        case CHOOSE_PROPERTY: {
            return {
                ...state,
                activeProperty: action.payload
            };
        }
        case UNCHOOSE_PROPERTY: {
            return {
                ...state,
                activeProperty: null
            };
        }
        default: {
            return state;
        }
    }
}
