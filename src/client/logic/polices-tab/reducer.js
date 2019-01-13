import { 
    POLICES_TAB_UPDATE,
    CHECKIN_OUT_UPDATE 
} from "./actionTypes";

export default function propertySubmitReducer(state = {}, action) {
    switch (action.type) {
        case POLICES_TAB_UPDATE: {
            return {
                ...state,
                ...action.payload,
            };
        }
        case CHECKIN_OUT_UPDATE: {

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
