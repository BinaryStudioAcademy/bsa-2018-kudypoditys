import {
    ADD_DATA
} from "./actionTypes";

export default function propertySubmitReducer(state = {}, action) {
    switch (action.type) {
        case ADD_DATA: {
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
