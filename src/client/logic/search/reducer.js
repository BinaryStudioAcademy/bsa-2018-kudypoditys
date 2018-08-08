import defaultState from 'client/logic/defaultState';
import {
    SEARCH_UPDATE
} from './actionTypes';

function hitsReducer(state = defaultState.search, action) {
    switch (action.type) {
        case SEARCH_UPDATE: {
            return {
                ...state.search,
                ...action.payload
            };
        }
        default: {
            return state;
        }
    }
}

export default hitsReducer;