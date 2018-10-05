import defaultState from "client/logic/defaultState";
import { SEARCH_UPDATE, SEARCH_SUBMIT_SUCCESS, SEARCH_SUBMIT_FAILED,CLEAR_SEARCH_PAGE } from "./actionTypes";

function searchReducer(state = defaultState.search, action) {
    switch (action.type) {
        case SEARCH_UPDATE: {
            return {
                ...state,
                ...action.payload
            }

        }
        case CLEAR_SEARCH_PAGE: {
            return {
                ...state,
                search: null
            };
        }
        case SEARCH_SUBMIT_SUCCESS: {
            return {
                ...state,
                ...action.payload
            }
        }
        case SEARCH_SUBMIT_FAILED: {
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

export default searchReducer;
