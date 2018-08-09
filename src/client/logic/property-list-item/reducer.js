import defaultState from 'client/logic/defaultState';
import {PROPERTY_ITEM_DELETE,
    PROPERTY_ITEM_INSERT,
    PROPERTY_ITEM_UPDATE,
    FETCH_PROPERTY_ITEM,
    FETCH_ALL_PROPERTY} from './actionTypes';

function foundPropertiesReducer(state = defaultState.sortType, action) {
    switch (action.type) {
         case PROPERTY_ITEM_DELETE : {
            const newState = { ...state };
            delete newState.foundProperties[action._id]
           return newState;
        }
        case PROPERTY_ITEM_INSERT : {
            return {
              ...state.foundProperties,
                [action._id]: action.payload
           };
        }
       case  PROPERTY_ITEM_UPDATE: {
        return {
        ...state.foundProperties,
                [action._id]: {
                 ...state.foundProperties[action._id],
                    ...action.payload
            }
         };
     }
       case FETCH_PROPERTY_ITEM: {
        return {
        ...state.foundProperties,
                [action._id]: {
                 ...state.foundProperties[action._id],
                    ...action.payload
            }
         };
     }
       case FETCH_ALL_PROPERTY: {
        return {
        ...state.foundProperties,
                [action._id]: action.payload
         };
     }
        default: {
            return state;
        }
    }
}

export default foundPropertiesReducer;