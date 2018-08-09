import { combineReducers } from 'redux';
import search from 'client/logic/search/reducer';
import sortType from 'client/logic/ranking-bar/reducer';
import cityInfos from 'client/logic/banner-list/reducer';
import header from 'client/logic/header/reducer';

export default combineReducers({
    search,
    sortType,
    cityInfos,
    header
});
