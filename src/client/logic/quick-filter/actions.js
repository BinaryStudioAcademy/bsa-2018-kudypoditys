import {
    QUICK_FILTERS_UPDATE
} from './actionType';

export const quickFiltersUpdate = (filter) => {
    console.log(filter);
    return{
        type: QUICK_FILTERS_UPDATE,
        payload: filter
    }
};