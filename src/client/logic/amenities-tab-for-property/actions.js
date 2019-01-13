import { AMENITIES_TAB_UPDATE } from "./actionTypes";


export function amenitiesTabUpdate(payload) {
    return {
        type: AMENITIES_TAB_UPDATE,
        payload
    }
}