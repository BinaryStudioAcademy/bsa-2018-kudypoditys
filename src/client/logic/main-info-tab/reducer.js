import {
    ADD_PROPERTY_FAILURE,
    ADD_PROPERTY_SUCCESS
} from './actionTypes';

export default (state, action) => {
    switch (action.type) {
        case ADD_PROPERTY_FAILURE: {
            return {
                ...state,
                ...action.payload
            }
        }
        case ADD_PROPERTY_SUCCESS: {
            return {
                ...state,
                ...action.payload
            }
        }
        default: {
            return state;
        }
    }
}