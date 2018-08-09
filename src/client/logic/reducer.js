import { combineReducers } from 'redux';
import search from 'client/logic/search/reducer';
import sortType from 'client/logic/ranking-bar/reducer';
export default combineReducers({
    search, sortType
});