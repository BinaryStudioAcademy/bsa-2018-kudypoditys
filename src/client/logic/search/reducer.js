import defaultState from "client/logic/defaultState";
import { SEARCH_UPDATE, SEARCH_SUBMIT_SUCCESS, SEARCH_SUBMIT_FAILED,LOADING_FINISH ,LOADING_START } from "./actionTypes";

function searchReducer(state = defaultState.search, action) {
    switch (action.type) {
        case SEARCH_UPDATE: {
            return {
                ...state,
                ...action.payload
            }

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
