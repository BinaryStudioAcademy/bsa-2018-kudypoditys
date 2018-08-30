import { USER_SETTINGS_UPDATE, GET_CURRENT_USER_SUCCESS } from "./actionTypes";
import defaultState from "client/logic/defaultState";

export default function userSettingsReducer(
    state = defaultState.personalSettings,
    action
) {
    switch (action.type) {
        case USER_SETTINGS_UPDATE: {
            return {
                ...state,
                ...action.payload
            };
        }
        case GET_CURRENT_USER_SUCCESS: {
            return {
                ...state,
                ...action.payload
            };
        }
        default: {
            return state;
        }
    }
}
