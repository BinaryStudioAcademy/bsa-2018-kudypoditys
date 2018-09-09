import { GET_CURRENT_USER_INFO } from "./actionTypes";

export function getUserpropertiesInfo(id) {
    return {
        type: GET_CURRENT_USER_INFO,
        id
    };
}
