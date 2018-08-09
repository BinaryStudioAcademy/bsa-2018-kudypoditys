import defaultState from 'client/logic/defaultState';
import {RANKING_BAR_UPDATE} from './actionTypes';

function sortTypeReducer(state = defaultState.sortType, action) {
    switch (action.type) {
        case RANKING_BAR_UPDATE: {
            return {
                ...state.sortType,
                ...action.payload
            };
        }
        // case COLLECTION_DELETE: {
        //     const newState = { ...state };
        //     delete newState.foundProperties[action._id]
        //     return newState;
        // }
        // case COLLECTION_INSERT: {
        //     return {
        //         ...state.foundProperties,
        //         [action._id]: action.payload
        //     };
        // }
        // case COLLECTION_UPDATE: {
        //     return {
        //         ...state.foundProperties,
        //         [action._id]: {
        //             ...state.foundProperties[action._id],
        //             ...action.payload
        //         }
        //     };
        // }
        default: {
            return state;
        }
    }
}

export default sortTypeReducer;