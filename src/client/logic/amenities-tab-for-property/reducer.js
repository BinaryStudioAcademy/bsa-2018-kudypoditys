import {AMENITIES_TAB_UPDATE } from "./actionTypes";

export default function amenitiesTabReducer(state, action) {
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