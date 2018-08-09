import defaultState from 'client/logic/defaultState';
import {PROPERTY_DESCRIPTION_UPDATE} from "./actionTypes";

// import {RANKING_BAR_UPDATE} from './actionTypes';

function propertyDescriptionReducer(state = defaultState.shownProperties, action) {
    switch (action.type) {
        case PROPERTY_DESCRIPTION_UPDATE: {

            // TODO add update logic
            return {
                // ...state.shownProperties,
                // ...action.payload
            };
        }
        default: {
            return state;
        }
    }

}

export default propertyDescriptionReducer;