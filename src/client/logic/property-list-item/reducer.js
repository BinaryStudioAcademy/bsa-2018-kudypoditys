import defaultState from './../defaultState';
import {PROPERTY_ITEM_DELETE,
    PROPERTY_ITEM_INSERT,
    PROPERTY_ITEM_UPDATE,
    FETCH_PROPERTY_ITEM,
    FETCH_ALL_PROPERTIES} from './actionTypes';

function propertiesReducer(state = defaultState.property, action) {
    switch (action.type) {
         case PROPERTY_ITEM_DELETE : {
            const newState = { ...state };
            delete newState.property[action._id]
           return newState;
        }
        case PROPERTY_ITEM_INSERT : {
            return {
              ...state.property,
                [action._id]: action.payload
           };
        }
       case  PROPERTY_ITEM_UPDATE: {
        return {
        ...state.property,
                [action._id]: {
                 ...state.property[action._id],
                    ...action.payload
            }
         };
     }
       case FETCH_PROPERTY_ITEM: {
        return {
        ...state.property,
                [action._id]: {
                 ...state.property[action._id],
                    ...action.payload
            }
         };
     }
       case FETCH_ALL_PROPERTIES: {
        return {
        ...state.property,
                [action._id]: action.payload
         };
     }
        default: {
            return state;
        }
    }
}

export default propertiesReducer;