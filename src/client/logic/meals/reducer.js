import defaultState from "../defaultState";
import {
    GET_MEALS,
    GET_MEALS_SUCCESS,
    GET_MEALS_FAILED
} from "./actionTypes";

function mealsReducer(state = defaultState.mealsData, action) {
  switch (action.type) {
    case GET_MEALS:
      return {
        ...state,
        isLoading: true
      };
    case GET_MEALS_SUCCESS:
      return {
        meals: action.payload,
        isLoading: false
      };
    case GET_MEALS_FAILED:
      return {
        isLoading: false,
        error: action.payload,
        meals: []
      };
    default:
      return state;
  }
}

export default mealsReducer;
