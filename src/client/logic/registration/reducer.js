import {
    REGISTER_FAILURE,
    REGISTER_SUCCESS
} from "./actionTypes";

export default (state, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS: {
            return {
                ...state,
                ...action.payload
            }
        }
        case REGISTER_FAILURE: {
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
