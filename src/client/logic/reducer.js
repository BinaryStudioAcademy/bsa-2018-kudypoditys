import { combineReducers } from 'redux';
import search from 'client/logic/search/reducer';


import shownProperties from 'client/logic/property-description/reducer'



import searchSummary from 'client/logic/search-summary/reducer';

import sortType from 'client/logic/ranking-bar/reducer';
import cityInfos from 'client/logic/banner-list/reducer';

export default combineReducers({
    search, sortType, cityInfos, searchSummary, shownProperties
});


