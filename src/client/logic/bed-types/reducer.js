import defaultState from 'client/logic/defaultState';
import {
  GET_BED_TYPES,
  GET_BED_TYPES_SUCCESS,
  GET_BED_TYPES_FAILED
} from './actionTypes';

function bedTypesReducer(state = defaultState.bedTypesData, action) {
  switch (action.type) {
    case GET_BED_TYPES:
      return {
        ...state,
        isLoading: true
      };
    case GET_BED_TYPES_SUCCESS:
      return {
        bedTypes: action.payload,
        isLoading: false
      };
    case GET_BED_TYPES_FAILED:
      return {
        isLoading: false,
        error: action.payload,
        bedTypes: []
      };
    default:
      return state;
  }
}

export default bedTypesReducer;