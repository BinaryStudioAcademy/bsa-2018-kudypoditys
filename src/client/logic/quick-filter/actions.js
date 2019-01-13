import {
    QUICK_FILTERS_UPDATE
} from "./actionType";

export function quickFiltersUpdate(payload) {
    return {
        type: QUICK_FILTERS_UPDATE,
        payload: payload
    }
}
