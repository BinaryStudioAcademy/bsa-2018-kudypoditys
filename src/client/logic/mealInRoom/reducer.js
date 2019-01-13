import defaultState from "../defaultState";
import {
    GET_MEALS_IN_ROOM,
    CREATE_MEALS_IN_ROOM,
    GET_MEAL_IN_ROOM_SUCCESS,
    GET_MEAL_IN_ROOM_FAILED
} from "./actionTypes";

function mealsInRoomReducer(state = defaultState.mealsData, action) {
  switch (action.type) {
    case GET_MEALS_IN_ROOM:
      return {
        ...state,
        isLoading: true
      };
    case CREATE_MEALS_IN_ROOM:
      return {
        ...state,
        mealsInRoom : state.mealsInRoom.concat[action.payload]
      }
    case GET_MEAL_IN_ROOM_SUCCESS:
      return {
        mealsInRoom: action.payload,
        isLoading: false
      };
    case GET_MEAL_IN_ROOM_FAILED:
      return {
        isLoading: false,
        error: action.payload,
        mealsInRoom: []
      };
    default:
      return state;
  }
}

export default mealsInRoomReducer;
