import defaultState from 'client/logic/defaultState';
import {
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRIES_FAILED
} from './actionTypes';

import { combineReducers } from "redux";

const all = (state = defaultState.countries.all, action) => {
    switch (action.type) {
        case GET_COUNTRIES_SUCCESS: {
            return action.payload.all }
        default:
            return state;
    }
};

const byId = (state = defaultState.countries.byId, action) => {
    switch (action.type) {
        case GET_COUNTRIES_SUCCESS: {
            return action.payload.byId.country;
        }
        case GET_COUNTRIES_FAILED: {
            return { error: action.payload };
        }
        default:
            return state;
    }
}


// function countriesReducer(state = defaultState.countries, action) {
//   switch (action.type) {
//     case GET_COUNTRIES:
//       return {
//         ...state,
//         isLoading: true
//       };
//     case GET_COUNTRIES_SUCCESS:
//       return {
//         countries: action.payload,
//         isLoading: false
//       };
//     case GET_COUNTRIES_FAILED:
//       return {
//         isLoading: false,
//         error: action.payload,
//         countries: []
//       };
//     default:
//       return state;
//   }
// }

export default combineReducers({ all, byId });;