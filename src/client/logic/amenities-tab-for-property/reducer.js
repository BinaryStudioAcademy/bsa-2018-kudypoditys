import {AMENITIES_TAB_UPDATE } from "./actionTypes";
import defaultState from "client/logic/defaultState";

export default function amenitiesTabReducer(state = defaultState.propertyAmenitiesTab, action,) {
    switch (action.type) {
        case AMENITIES_TAB_UPDATE: {
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