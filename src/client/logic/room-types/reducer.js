import defaultState from "../defaultState";
import {
  GET_ROOM_TYPES,
  GET_ROOM_TYPES_SUCCESS,
  GET_ROOM_TYPES_FAILED
} from "./actionTypes";

function roomTypesReducer(state = defaultState.roomTypesData, action) {
  switch (action.type) {
    case GET_ROOM_TYPES:
      return {
        ...state,
        isLoading: true
      };
    case GET_ROOM_TYPES_SUCCESS:
      return {
        roomTypes: action.payload,
        isLoading: false
      };
    case GET_ROOM_TYPES_FAILED:
      return {
        isLoading: false,
        error: action.payload,
        roomTypes: []
      };
    default:
      return state;
  }
}

export default roomTypesReducer;
