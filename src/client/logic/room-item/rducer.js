import { LAYOUT_TAB_UPDATE } from "./actionTypes";
import defaultState from "client/logic/defaultState"

export default function layoutTabReducer(state =defaultState.propertyLayoutTab, action) {
    switch (action.type) {
        case LAYOUT_TAB_UPDATE: {
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