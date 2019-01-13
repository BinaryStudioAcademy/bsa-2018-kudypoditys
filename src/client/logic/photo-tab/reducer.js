import defaultState from "../defaultState";
import { PROPERTY_PHOTO_UPDATE } from "./actionTypes";

function propertyPhotoReducer(state = defaultState.images, action) {
    switch (action.type) {
        case PROPERTY_PHOTO_UPDATE: {

            return {
                ...state,
                ...action.payload

            };
        }
        default: {
            return state;
        }
    }

}

export default propertyPhotoReducer;
