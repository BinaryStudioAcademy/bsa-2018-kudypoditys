import defaultState from "../defaultState";
import { CHECKIN_OUT_UPDATE } from "./actionTypes";

export default function checkInCheckOutReducer(state = defaultState.checkInCheckOut, action) {
  switch (action.type) {
    case CHECKIN_OUT_UPDATE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}

