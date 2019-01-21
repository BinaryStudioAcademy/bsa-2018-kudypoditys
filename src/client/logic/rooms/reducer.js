import defaultState from 'client/logic/defaultState';
import {
    GET_ROOMS_SUCCESS
} from './actionTypes';
import { combineReducers } from "redux";

const byId = (state = defaultState.rooms.byId, action) => {
    switch (action.type) {

        case GET_ROOMS_SUCCESS:
            return action.payload.entities.rooms;
        default:
            return state;
    }
}

const all = (state = defaultState.rooms.all, action) => {
    switch (action.type) {
        case GET_ROOMS_SUCCESS:
            return action.payload.all
        default:
            return state;
    }
};

export default combineReducers({ all, byId });
