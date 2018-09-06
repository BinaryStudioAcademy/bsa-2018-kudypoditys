import defaultState from 'client/logic/defaultState';
import {
  GET_LANGUAGES,
  GET_LANGUAGES_SUCCESS,
  GET_LANGUAGES_FAILED
} from './actionTypes';

function languagesReducer(state = defaultState.languagesData, action) {
  switch (action.type) {
    case GET_LANGUAGES:
      return {
        ...state,
        isLoading: true
      };
    case GET_LANGUAGES_SUCCESS:
      return {
        languages: action.payload,
        isLoading: false
      };
    case GET_LANGUAGES_FAILED:
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