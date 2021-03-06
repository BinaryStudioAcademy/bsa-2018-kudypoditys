import { call, put, takeLatest, all } from "redux-saga/effects";
import searchService from "client/services/searchService";
import * as actionTypes from "./actionTypes";
import { RANKING_BAR_UPDATE } from "../ranking-bar/actionTypes";
import { QUICK_FILTERS_UPDATE } from "../quick-filter/actionType";
import { PAGINATION_UPDATE } from "../pagination/actionType";

function* submitSearch(action) {
    try {
        const searchResponse = yield call(
            searchService.submitSearch,
            action.payload
        );
        yield put({
            type: actionTypes.SEARCH_SUBMIT_SUCCESS,
            payload: {
                ...searchResponse
            }
        });
    } catch (error) {
        console.log(error.message);
        yield put({
            type: actionTypes.SEARCH_SUBMIT_FAILED,
            payload: { data: { properties: [], propertiesCount: 0 } }
        });
    }
}

export default function* searchSaga() {
    yield all([
        takeLatest(actionTypes.SEARCH_SUBMIT, submitSearch),
        takeLatest(RANKING_BAR_UPDATE, submitSearch),
        takeLatest(QUICK_FILTERS_UPDATE, submitSearch),
        takeLatest(PAGINATION_UPDATE, submitSearch)
    ]);
}
