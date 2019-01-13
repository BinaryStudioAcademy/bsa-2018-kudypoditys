import { SERVICES_TAB_UPDATE } from "./actionTypes";
import defaultState from "../defaultState";

export default function servicesTabReducer(state = defaultState.propertyServicesTab, action,) {
    switch (action.type) {
        case SERVICES_TAB_UPDATE: {
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
