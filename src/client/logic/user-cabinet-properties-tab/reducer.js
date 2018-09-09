import defaultState from "client/logic/defaultState";
import { GET_CURRENT_USER_INFO_SUCCESS } from "./actionTypes";

export default function availabilityCalendarReducer(
    state = defaultState.availabilityCalendar,
    action
) {
    switch (action.type) {
        case GET_CURRENT_USER_INFO_SUCCESS: {
            console.log("reducer =", action.payload);
            return {
                ...state,

                properties: action.payload.propetyResponse
            };
        }

        default: {
            return state;
        }
    }
}
