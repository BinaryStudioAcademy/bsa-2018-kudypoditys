import defaultState from "../defaultState";
import {
  GET_CURRENCIES,
  GET_CURRENCIES_FAILED,
  GET_CURRENCIES_SUCCESS,
} from "./actionTypes";

function countriesReducer(state = defaultState.currenciesData, action) {
  switch (action.type) {
    case GET_CURRENCIES:
      return {
        ...state,
        isLoading: true
      };
    case GET_CURRENCIES_SUCCESS:
      return {
        currencies: action.payload,
        isLoading: false
      };
    case GET_CURRENCIES_FAILED:
      return {
        isLoading: false,
        error: action.payload,
        currencies: []
      };
    default:
      return state;
  }
}

export default countriesReducer;