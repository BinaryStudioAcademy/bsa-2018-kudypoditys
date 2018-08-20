import { LAYOUT_TAB_UPDATE } from "./actionTypes";

export function layoutTabUpdate(payload) {
    return {
        type: LAYOUT_TAB_UPDATE,
        payload
    }
}