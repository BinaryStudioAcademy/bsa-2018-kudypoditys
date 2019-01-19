import defaultState from '../../logic/defaultState';
import { CITIES_GET_SUCCESS } from "./actionType";
import { combineReducers } from "redux";

const byId = (state = defaultState.cities.byId, action) => {
    switch (action.type) {
        case CITIES_GET_SUCCESS: {
            return action.payload.entities.city;
        }
        default:
            return state;
    }
}

const all = (state = defaultState.cities.all, action) => {
    switch (action.type) {
        case CITIES_GET_SUCCESS: {
            return action.payload.all }
        default:
            return state;
    }
};

export default combineReducers({ all, byId });
