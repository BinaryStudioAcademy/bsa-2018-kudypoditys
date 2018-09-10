import {
    USER_SETTINGS_UPDATE,
    UPLOAD_USER_AVATAR_SUCCESS,
    USER_SETTINGS_SEND_SUCCES,
    USER_AVATAR_DELETE,
    UPLOAD_USER_AVATAR,
    USER_PASSWORD_CHANGE_SUCCESS,
    USER_PASSWORD_CHANGE_FAILURE
} from "./actionTypes";
import { GET_CURRENT_USER_SUCCESS } from "../login/actionTypes";
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
        case UPLOAD_USER_AVATAR_SUCCESS: {
            return {
                ...state,
                ...action.payload,
                avatarLoading: false
            };
        }
        case USER_SETTINGS_SEND_SUCCES: {
            return {
                ...state,
                ...action.payload
            };
        }
        case USER_AVATAR_DELETE: {
            return {
                ...state,
                avatar: null
            };
        }
        case UPLOAD_USER_AVATAR: {
            return {
                ...state,
                avatarLoading: true
            };
        }
        case USER_PASSWORD_CHANGE_SUCCESS: {
            return {
                ...state,
                passwordMessage: action.payload,
                userPasswordError: false
            };
        }

        case USER_PASSWORD_CHANGE_FAILURE: {
            return {
                ...state,
                passwordMessage: action.payload,
                userPasswordError: true
            };
        }

        default: {
            return state;
        }
    }
}
