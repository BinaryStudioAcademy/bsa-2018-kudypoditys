import defaultState from 'client/logic/defaultState';
import {PROPERTY_DESCRIPTION_UPDATE} from "/logic/property-description/actionTypes";


function propertyPageReducer(state = defaultState.shownProperties, action) {
    switch (action.type) {
        case PROPERTY_DESCRIPTION_UPDATE: {


            return {
                ...state.shownProperties,
                [action.payload.id]: {
                    ...action.payload.data
                }

            };
        }
        default: {
            return state;
        }
    }

}

export default propertyPageReducer;