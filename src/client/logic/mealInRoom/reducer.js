import defaultState from 'client/logic/defaultState';
import * as actionTypes from './actionTypes';

function mealsInRoomReducer(state = defaultState.mealsInRoomData, action) {
  switch (action.type) {
    case actionTypes.GET_MEALS_IN_ROOM:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.CREATE_MEALS_IN_ROOM:
      return {
        ...state,
        mealsInRoom : state.mealsInRoom.concat[action.payload]
      }
    case actionTypes.GET_MEAL_IN_ROOM_SUCCESS:
      return {
        mealsInRoom: action.payload,
        isLoading: false
      };
    case actionTypes.UPDATE_MEALS_IN_ROOM_SUCCESS:
      return {
        mealsInRoom: action.payload, ///DON`T FORGET TO CHANGE STATE
        isLoading: false
      };
    case actionTypes.UPDATE_MEALS_IN_ROOM_FAILED:
      return {
        isLoading: false,
        error: action.payload,
      };
    case actionTypes.GET_MEAL_IN_ROOM_FAILED:
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