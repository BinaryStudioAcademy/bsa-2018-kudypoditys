import { USER_SETTINGS_UPDATE } from "./actionTypes";

export default function userSettingsReducer(state = {}, action) {
    switch (action.type) {
        case USER_SETTINGS_UPDATE: {
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