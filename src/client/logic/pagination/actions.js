import {
    PAGINATION_UPDATE
} from "./actionType";

export const paginationUpdate = (payload) => {
    return {
        type:PAGINATION_UPDATE,
        payload
    }
};
