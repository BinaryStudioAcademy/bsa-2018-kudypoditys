import {
    CITY_INFOS_GET
} from './actionType';

export const cityInfosGet = (currency) => ({
    type: CITY_INFOS_GET,
    payload: currency
});
