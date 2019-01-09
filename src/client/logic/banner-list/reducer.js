import defaultState from 'client/logic/defaultState';
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
            
            for (let city in action.payload) {
                action.payload[city].baseCurrency = '$';
                action.payload[city].baseAvgPrice = action.payload[city].avgPrice;

                action.payload[city].currency = currency.code || '$';
                action.payload[city].avgPrice = convert(
                    action.payload[city].baseCurrency,
                    action.payload[city].baseAvgPrice,
                    action.payload[city].currency
                );
                action.payload[city].avgPrice = +action.payload[city].avgPrice;
            }

            return {
                ...state,
                ...action.payload,
            };
        }

        default:
            return state;
    }
}

export default cityInfosReducer;
