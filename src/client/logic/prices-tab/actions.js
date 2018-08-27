import {ADD_DATA} from "./actionTypes";


export function tabSubmit(payload) {
    return {
        type: ADD_DATA,
        payload
    };
}
