import defaultState from "client/logic/defaultState";
import { GET_CURRENT_USER_SUCCESS } from "../login/actionTypes";

export default function userCabinetReducer(
    state = defaultState.userCabinet,
    action
) {
    switch (action.type) {
        case GET_CURRENT_USER_SUCCESS: {
            return {
                ...state,
                user: action.payload
            };
        }
        default: {
            return state;
        }
    }
}
