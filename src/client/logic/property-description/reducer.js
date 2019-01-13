import defaultState from "../defaultState";
import { PROPERTY_DESCRIPTION_UPDATE } from "./actionTypes";

function propertyDescriptionReducer(state = defaultState.shownProperties, action) {
    switch (action.type) {
        case PROPERTY_DESCRIPTION_UPDATE: {


            return {
                ...state.shownProperties,
                [action.payload.id]: {
                    ...action.payload.data
                }

            };
        }
        default: {
            return state;
        }
    }

}

export default propertyDescriptionReducer;
