import propertyPage from "client/logic/property-page/reducer";
import { combineReducers } from "redux";
import search from "client/logic/search/reducer";
import shownProperties from "client/logic/property-description/reducer";
import searchSummary from "client/logic/search-summary/reducer";
import sortType from "client/logic/ranking-bar/reducer";
import foundProperties from "client/logic/property-list-item/reducer";
import registration from "client/logic/registration/reducer";
import login from "client/logic/login/reducer";
import { reducer as formReducer } from "redux-form";
import quickFilter from "client/logic/quick-filter/reducer";
import header from "client/logic/header/reducer";
import checkInOut from "client/logic/checkIn-checkOut/reducer";
import propertyPhoto from 'client/logic/photo-tab/reducer';
import roomSummary from 'client/logic/rooms-summary-table/reducer'
import cityInfos from "client/logic/banner-list/reducer";
import propertyServicesTab from "client/logic/property-services-tab/reducer";
import amenitiesTab from './amenities-tab-for-property/reducer';
import propertySubmit from './main-info-tab/reducer';
import policesTab from "client/logic/polices-tab/reducer";
import layoutTab from './room-item/rducer';

export default combineReducers({
    search,
    sortType,
    cityInfos,
    searchSummary,
    header,
    shownProperties,
    foundProperties,
    // checkInOut,
    form: formReducer.plugin({
        registration: registration,
        login: login,
    }),
    propertyPage,
    quickFilter,
    roomSummary,
    propertyServicesTab,
    propertySubmit,
    amenitiesTab,
    policesTab,
    layoutTab
});
