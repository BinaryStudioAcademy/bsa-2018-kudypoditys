import defaultState from 'client/logic/defaultState';
import {
    SEARCH_UPDATE
} from './actionTypes';

function searchReducer(state = defaultState.search, action) {
    switch (action.type) {
        case SEARCH_UPDATE: {
            if ((action.payload.checkOut && state.checkIn) && action.payload.checkOut <= state.checkIn) {
                state.checkIn = null;
                action.payload.checkOut = null;
            }
            if ((action.payload.checkIn && state.checkOut) && action.payload.checkIn >= state.checkOut) {
                state.checkOut = null;
                action.payload.checkIn = null;
            }
            return {
                ...state,
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

export default searchReducer;