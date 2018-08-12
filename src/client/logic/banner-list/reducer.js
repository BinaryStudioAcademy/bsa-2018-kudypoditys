import defaultState from 'client/logic/defaultState';
import {
    CITY_INFOS_GET
} from './actionType';

function cityInfosReducer(state = defaultState.cityInfos, action) {
    switch (action.type) {
        case CITY_INFOS_GET:
            return [...state];
        default:
            return state;

    }
}

export default cityInfosReducer;