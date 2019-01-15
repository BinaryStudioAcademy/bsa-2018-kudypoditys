import { GET_MEALS_IN_ROOM, CREATE_MEALS_IN_ROOM, UPDATE_MEALS_IN_ROOM } from './actionTypes';

export const mealsInRoomGet = () => ({
  type: GET_MEALS_IN_ROOM
});

export const createMealsInRoom = (payload) => ({
  type: CREATE_MEALS_IN_ROOM,
  payload
});

export const updateMealsInRoom = (payload) => ({
    type: UPDATE_MEALS_IN_ROOM,
    payload
  });
