import { CREATE_PROPERTY } from "./actionTypes";

export function propertyCreate(payload) {
    return {
        type: CREATE_PROPERTY,
        payload
    };
}
