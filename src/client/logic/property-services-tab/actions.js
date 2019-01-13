import { SERVICES_TAB_UPDATE } from "./actionTypes";

export function servicesTabUpdate(payload) {
    return {
        type: SERVICES_TAB_UPDATE,
        payload
    }
}
