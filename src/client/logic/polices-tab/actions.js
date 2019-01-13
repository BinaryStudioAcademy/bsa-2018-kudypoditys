import { 
    POLICES_TAB_UPDATE,
    CHECKIN_OUT_UPDATE
} from "./actionTypes";

export function policesTabUpdate(payload) {
    return {
        type: POLICES_TAB_UPDATE,
        payload
    }
}

export function checkInOutUpdate(payload) {

    return {
        type: CHECKIN_OUT_UPDATE,
        payload
    };
}
