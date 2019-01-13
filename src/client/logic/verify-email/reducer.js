import {
    VERIFICATION_DATA_VERIFIED
} from "./actionTypes";

export default function emailVerificationReducer(state = {}, action) {
    switch (action.type) {
        case VERIFICATION_DATA_VERIFIED: {
            return {
                ...state,
                verified: true
            }
        }
        default: {
            return state;
        }
    }
}
