import {
    CREATE_REVIEW_FAILED,
    CREATE_REVIEW_SUCCESS,

} from './actionTypes'

import defaultState from "client/logic/defaultState";

export default function propertySubmitReducer(state = {}, action) {
    switch (action.type) {

        case CREATE_REVIEW_FAILED: {
            return {
                ...state,
                ...action.payload
            }
        }
        case CREATE_REVIEW_SUCCESS: {
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
