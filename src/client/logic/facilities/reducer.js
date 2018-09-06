import defaultState from 'client/logic/defaultState';
import {
  GET_FACILITIES,
  GET_FACILITIES_FAILED,
  GET_FACILITIES_SUCCESS
} from './actionTypes';

function facilitiesReducer(state = defaultState.faclitiesData, action) {
  switch (action.type) {
    case GET_FACILITIES:
      return {
        ...state,
        isLoading: true
      };
    case GET_FACILITIES_SUCCESS:
      return {
        facilities: action.payload,
        isLoading: false
      };
    case GET_FACILITIES_FAILED:
      return {
        isLoading: false,
        error: action.payload,
        facilities: []
      };
    default:
      return state;
  }
}

export default facilitiesReducer;