import defaultState from 'client/logic/defaultState';
import { SLIDE_UPDATE } from './actionTypes';

export default function slideReducer(state = defaultState.slider, action) {
    switch(action.type) {
        case SLIDE_UPDATE: {
            return {
                ...state,
                slideIndex: action.payload
            }
        }
        default: {
            return state;
        }
    }
}