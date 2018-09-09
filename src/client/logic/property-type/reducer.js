import defaultState from 'client/logic/defaultState';
import {
  GET_PROPERTY_TYPES,
  GET_PROPERTY_TYPES_SUCCESS,
  GET_PROPERTY_TYPES_FAILED
} from './actionTypes';

function propertyTypesReducer(state = defaultState.propertyTypesData, action) {
  switch (action.type) {
    case GET_PROPERTY_TYPES:
      return {
        ...state,
        isLoading: true
      };
    case GET_PROPERTY_TYPES_SUCCESS:
      return {
        propertyTypes: action.payload,
        isLoading: false
      };
    case GET_PROPERTY_TYPES_FAILED:
      return {
        isLoading: false,
        error: action.payload,
        propertyTypes: []
      };
    default:
      return state;
  }
}

export default propertyTypesReducer;