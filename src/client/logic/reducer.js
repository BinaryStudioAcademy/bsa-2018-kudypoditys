import { combineReducers } from 'redux';
import search from 'client/logic/search/reducer';
import shownProperties from 'client/logic/property-description/reducer'
import propertyPage from 'client/logic/property-page/reducer'


import searchSummary from 'client/logic/search-summary/reducer';
import sortType from 'client/logic/ranking-bar/reducer';
import foundProperties from 'client/logic/property-list-item/reducer';
import registration from 'client/logic/registration/reducer';
import {reducer as formReducer} from 'redux-form';


import cityInfos from 'client/logic/banner-list/reducer';

export default combineReducers({
    search,
    sortType,
    cityInfos,
    searchSummary,
    shownProperties,
    foundProperties,
    form: formReducer.plugin({
        registration: registration
    }),
    propertyPage
});


