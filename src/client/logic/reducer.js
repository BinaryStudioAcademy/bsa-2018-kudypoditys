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
import roomSummary from "client/logic/rooms-summary-table/reducer";
import cityInfos from "client/logic/banner-list/reducer";
import amenitiesTab from "./amenities-tab-for-property/reducer";
import propertySubmit from "./main-info-tab/reducer";
import propertyRegistration from "client/logic/property-creation-tabs/reducer";
import userSettings from "client/logic/personal-settings-edit/reducer";
import userCabinet from "./user-cabinet/reducer";
import userVerified from "client/logic/verify-email/reducer";
import resetPassword from 'client/logic/reset-password/reducer';
import forgotPassword from 'client/logic/forgot-password/reducer';
import countries from 'client/logic/countries/reducer';
import languages from 'client/logic/languages/reducer';
import facilities from 'client/logic/facilities/reducer';
import availabilityCalendar from "client/logic/property-availability-calendar/reducer";
import checkInCheckOut from 'client/logic/checkInCheckOut/reducer';

export default combineReducers({
    search,
    sortType,
    cityInfos,
    searchSummary,
    header,
    shownProperties,
    foundProperties,
    checkInCheckOut,
    form: formReducer.plugin({
        registration: registration,
        login: login
    }),
    login,
    propertyPage,
    quickFilter,
    roomSummary,
    propertySubmit,
    amenitiesTab,
    // policesTab,
    // layoutTab,
    propertyRegistration,
    userVerified,
    userSettings,
    userCabinet,
    resetPassword,
    forgotPassword,
    countries,
    languages,
    facilities,
    availabilityCalendar
});
