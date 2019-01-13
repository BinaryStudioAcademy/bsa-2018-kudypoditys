import defaultState from "../defaultState";
import * as actionTypes from "./actionTypes";

function languagesReducer(state = defaultState.languagesData, action) {
  switch (action.type) {
    case actionTypes.GET_LANGUAGES:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.CREATE_LANGUAGE_SUCCESS:
      return {
        ...state,
        languages: [...state.languages, action.payload]
      };
    case actionTypes.GET_LANGUAGES_SUCCESS:
      return {
        languages: action.payload,
        isLoading: false
      };
    case actionTypes.GET_LANGUAGES_FAILED:
      return {
        isLoading: false,
        error: action.payload,
        languages: []
      };
    default:
      return state;
  }
}

export default languagesReducer;