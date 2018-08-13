import defaultState from 'client/logic/defaultState';
import {CHECKIN_OUT_UPDATE} from './actionTypes';

function checkInOutReducer(state = defaultState.addProperty, action) {
    switch (action.type) {
        case CHECKIN_OUT_UPDATE: {

            console.log(action.payload + "payload");
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

export default checkInOutReducer;