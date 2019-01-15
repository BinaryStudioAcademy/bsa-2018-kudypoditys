// import defaultState from "client/logic/defaultState";
import {
    GET_CURRENT_USER_INFO_SUCCESS,
    CHOOSE_PROPERTY,
    UNCHOOSE_PROPERTY,
    UPDATE_MEALS_IN_PROPERTY_ROOM_SUCCESS
} from "./actionTypes";

export default function userCabinetPropertiesReducer(
    state = {},
    action
) {
    switch (action.type) {
        case GET_CURRENT_USER_INFO_SUCCESS: {
            return {
                ...state,
                properties: action.payload.propetyResponse
            };
        }
        case CHOOSE_PROPERTY: {
            return {
                ...state,
                activeProperty: action.payload
            };
        }
        case UNCHOOSE_PROPERTY: {
            return {
                ...state,
                activeProperty: null
            };
        }
        case UPDATE_MEALS_IN_PROPERTY_ROOM_SUCCESS: {

            return {...state ,
                    activeProperty : {
                        ...state.activeProperty,
                        rooms : state.activeProperty.rooms.map((r, i) => {
                            if (state.activeProperty.rooms[i].id === action.payload.roomId) {
                                return {
                                    ...r,
                                    mealInRooms: action.payload.meals
                                }
                            }
                            return r;
                        })
                    }
                }
        }
        default: {
            return state;
        }
    }
}
