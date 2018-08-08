import defaultState from 'client/logic/defaultState';
import { SLIDE_CHANGE } from './actionTypes';

export default function slideReducer(state = defaultState.slider, action) {
    switch(action.type) {
        case SLIDE_CHANGE: {
            return {
                ...state,
                slideId: action.payload
            }
        }
        default: {
            return state;
        }
    }
}