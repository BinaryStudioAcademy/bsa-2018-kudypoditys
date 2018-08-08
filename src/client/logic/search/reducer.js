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

export default hitsReducer;