import { call, put, takeLatest,all } from 'redux-saga/effects';
import searchService from 'client/services/searchService';
import * as actionTypes from './actionTypes';
import { RANKING_BAR_UPDATE } from '../ranking-bar/actionTypes';
import { QUICK_FILTERS_UPDATE } from '../quick-filter/actionType';
import { PAGINATION_UPDATE } from '../pagination/actionType';

function* submitSearch(action) {
    try {
        console.log("saga submitSearch")
        console.log("request "+action.payload )
        const searchResponse = yield call(searchService.submitSearch, action.payload);
        console.log("reponse "+JSON.stringify(searchResponse ))
        yield put({
            type:actionTypes.SEARCH_SUBMIT_SUCCESS,
            payload: {
                ...searchResponse            }
        });
    }
    catch (error) {
        console.log(error.message)
        yield put({ type:actionTypes.SEARCH_SUBMIT_FAILED})
    }
}

export default function* searchSaga() {
    yield all([
        takeLatest(actionTypes.SEARCH_SUBMIT, submitSearch),
        takeLatest(RANKING_BAR_UPDATE, submitSearch),
        takeLatest(QUICK_FILTERS_UPDATE, submitSearch),
        takeLatest(PAGINATION_UPDATE, submitSearch)
    ])
}
