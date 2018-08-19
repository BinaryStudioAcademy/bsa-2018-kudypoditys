import {
    CREATE_PROPERTY_FAILURE,
    CREATE_PROPERTY_SUCCESS
} from './actionTypes';


export default function propertySubmitReducer(state = {}, action) {
    switch (action.type) {
        case CREATE_PROPERTY_FAILURE: {
            return {
                ...state,
                ...action.payload
            }
        }
        case CREATE_PROPERTY_SUCCESS: {
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