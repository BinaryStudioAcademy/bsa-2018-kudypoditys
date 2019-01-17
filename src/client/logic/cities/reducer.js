import defaultState from '../../logic/defaultState';
import { convert } from '../../helpers/convertCurrency';
import { CITIES_GET_SUCCESS } from "./actionType";
import { combineReducers } from "redux";

const byId = (state = defaultState.cities.byId, action) => {
    switch (action.type) {
        case CITIES_GET_SUCCESS: {
            // const cities = action.payload.entities.city;
            // const currency = localStorage.getItem("selectedCurrency") || {};
            // const baseCurrency = "$",
            //     currencyCode = currency.code || "$";

            // const cities = action.payload.map(city => ({
            //     ...city,
            //     avgPrice: convert(baseCurrency, city.avgPrice, currencyCode)
            // }));
            console.log(action.payload.entities.city);

            return action.payload.entities.city;
        }
        default:
            return state;
    }
}

const all = (state = defaultState.cities.all, action) => {
    console.log(action.payload);
    switch (action.type) {
        case CITIES_GET_SUCCESS: {
            return action.payload.all }
        default:
            return state;
    }
};

function cityInfosReducer(state = defaultState.cities, action) {
    switch (action.type) {
        // case CURENCY_SELECT:
        //     for (let city in state) {
        //         state[city].avgPrice = convert(
        //             state[city].baseCurrency,
        //             state[city].baseAvgPrice,
        //             action.payload.code,
        //         );
        //         state[city].currency = action.payload.code;

        //     }

        //     return { ...state };

        case CITIES_GET_SUCCESS: {
            const currency = localStorage.getItem("selectedCurrency") || {};
            const baseCurrency = "$",
                currencyCode = currency.code || "$";

            const cities = action.payload.map(city => ({
                ...city,
                avgPrice: convert(baseCurrency, city.avgPrice, currencyCode)
            }));

            return { ...state, cities };
        }

        default:
            return state;
    }
}

export default combineReducers({ all, byId });
