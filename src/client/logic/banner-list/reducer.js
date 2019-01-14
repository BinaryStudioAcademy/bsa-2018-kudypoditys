import defaultState from '../../logic/defaultState';
import { convert } from '../../helpers/convertCurrency';
import { CITY_INFOS_GET_SUCCESS } from './actionType';
import { CURENCY_SELECT } from '../header/actionTypes';

function cityInfosReducer(state = defaultState.cityInfos, action) {
    switch (action.type) {

        case CURENCY_SELECT:
            for (let city in state) {
                state[city].avgPrice = convert(
                    state[city].baseCurrency,
                    state[city].baseAvgPrice,
                    action.payload.code,
                );
                state[city].currency = action.payload.code;

            }

            return { ...state };

        case CITY_INFOS_GET_SUCCESS: {
            const currency = localStorage.getItem('selectedCurrency') || {};
            const baseCurrency = '$',
                currencyCode = currency.code || '$';

            const cities = action.payload.map(city => ({
                ...city,
                avgPrice: convert(baseCurrency, city.avgPrice, currencyCode)
            }));

            return {
                ...state,
                cities
            };
        }

        default:
            return state;
    }
}

export default cityInfosReducer;
