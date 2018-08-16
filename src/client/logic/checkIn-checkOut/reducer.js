import defaultState from 'client/logic/defaultState';
import {CHECKIN_OUT_UPDATE} from './actionTypes';

function checkInOutReducer(state = defaultState.addProperty, action) {
    switch (action.type) {
        case CHECKIN_OUT_UPDATE: {


            return {
                ...state,
                ...action.payload





            };
        }

        default: {
            return state;
        }
    }
}

export default checkInOutReducer;