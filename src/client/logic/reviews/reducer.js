import {
    CREATE_REVIEW_FAILED,
    CREATE_REVIEW_SUCCESS,
    UPDATE_REVIEW,
    UPDATE_RATING

} from './actionTypes'

import defaultState from "client/logic/defaultState";

export default function reviewsReducer(state = defaultState.reviewData, action) {
    switch (action.type) {
        case UPDATE_REVIEW: {
            return {
                ...state,
                ...action.payload
            }
        }
        case UPDATE_RATING: {
            return {
                // ...state.reviewRating,
                reviewRating:{
                    ...state.reviewRating,
                    ...action.payload
                }
                // ...state.foundProperties,
                // //         [action._id]: {
                // //             ...state.foundProperties[action._id],
                // //             ...action.payload

            }
        }
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
