import defaultState from '../defaultState';
import { UPDATE_EDIT_ROOM_INDEX } from './actionTypes';

function testRoomsTabReducer(state = defaultState.testRoomsTab, action) {
  switch (action.type) {
    case UPDATE_EDIT_ROOM_INDEX:
      return {
        editRoomIndex: action.payload
      }
    default:
      return state;
  }
}

export default testRoomsTabReducer;