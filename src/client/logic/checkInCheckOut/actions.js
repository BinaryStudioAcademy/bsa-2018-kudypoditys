import { CHECKIN_OUT_UPDATE } from "./actionTypes";

export function checkInOutUpdate(payload) {
  return {
    type: CHECKIN_OUT_UPDATE,
    payload
  };
}