import {POLICES_TAB_UPDATE} from "./actionTypes";
import defaultState from 'client/logic/defaultState';


export default function policesTabReducer(state = defaultState.addProperty, action) {
    switch (action.type) {
        case POLICES_TAB_UPDATE: {
            return {
                ...state,
                ...action.payload,
            };
        }
        default: {
            return state;
        }
    }
}