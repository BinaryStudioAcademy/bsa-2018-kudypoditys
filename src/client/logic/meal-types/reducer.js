import defaultState from 'client/logic/defaultState';
import {
    GET_MEAL_TYPES,
    GET_MEAL_TYPES_SUCCESS,
    GET_MEAL_TYPES_FAILED
} from './actionTypes';

function mealTypesReducer(state = defaultState.mealTypesData, action) {
  switch (action.type) {
    case GET_MEAL_TYPES:
      return {
        ...state,
        isLoading: true
      };
    case GET_MEAL_TYPES_SUCCESS:
      return {
        mealTypes: action.payload,
        isLoading: false
      };
    case GET_MEAL_TYPES_FAILED:
      return {
        isLoading: false,
        error: action.payload,
        mealTypes: []
      };
    default:
      return state;
  }
}

export default mealTypesReducer;