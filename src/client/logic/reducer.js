import { combineReducers } from 'redux';
import search from 'client/logic/search/reducer';

import sortType from 'client/logic/ranking-bar/reducer';
import shownProperties from 'client/logic/property-description/reducer'


export default combineReducers({
    search, sortType, shownProperties
});