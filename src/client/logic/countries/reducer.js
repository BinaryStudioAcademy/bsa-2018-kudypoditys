import defaultState from "../defaultState";
import {
  GET_COUNTRIES,
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRIES_FAILED
} from "./actionTypes";

function countriesReducer(state = defaultState.countriesData, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        isLoading: true
      };
    case GET_COUNTRIES_SUCCESS:
      return {
        countries: action.payload,
        isLoading: false
      };
    case GET_COUNTRIES_FAILED:
      return {
        isLoading: false,
        error: action.payload,
        countries: []
      };
    default:
      return state;
  }
}

export default countriesReducer;