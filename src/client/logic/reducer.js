import { combineReducers } from 'redux';
import search from 'client/logic/search/reducer';
import searchSummary from 'client/logic/search-summary/reducer';


export default combineReducers({
    search, searchSummary
});