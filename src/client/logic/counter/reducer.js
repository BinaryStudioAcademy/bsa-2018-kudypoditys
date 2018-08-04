import defaultState from 'client/logic/defaultState';
import { INCREMENT } from './actionTypes';

function hitsReducer(state = defaultState.counter, action) {
    switch (action.type) {
        case INCREMENT: {
            return {
                ...state,
                hits: state.hits + 1
            };
        }
        default: {
            return state;
        }
    }
}

export default hitsReducer;