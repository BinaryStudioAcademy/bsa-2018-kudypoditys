import propertyPage from "../property-page/reducer";
import { combineReducers } from "redux";
import search from "../search/reducer";
import shownProperties from "../property-description/reducer";
import searchSummary from "../search-summary/reducer";
import sortType from "../ranking-bar/reducer";
import foundProperties from "../property-list-item/reducer";
import registration from "../registration/reducer";
import login from "../login/reducer";
import { reducer as formReducer } from "redux-form";
import quickFilter from "../quick-filter/reducer";
import header from "../header/reducer";
import roomSummary from "../rooms-summary-table/reducer";
import cityInfos from "../banner-list/reducer";
import amenitiesTab from "./amenities-tab-for-property/reducer";
import propertySubmit from "./main-info-tab/reducer";
import propertyRegistration from "../property-registration/reducer";
import userSettings from "../user-cabinet-settings/reducer";
import userCabinet from "./user-cabinet/reducer";
import userVerified from "../verify-email/reducer";
import resetPassword from "../reset-password/reducer";
import forgotPassword from "../forgot-password/reducer";
import countries from "../countries/reducer";
import languages from "../languages/reducer";
import facilities from "../facilities/reducer";
import availabilityCalendar from "../property-availability-calendar/reducer";
import checkInCheckOut from "../checkInCheckOut/reducer";
import paymentTypes from "../payment-type/reducer";
import review from "../reviews/reducer";
import roomTypes from "../room-types/reducer";
import meals from "../meals/reducer";
import mealTypes from "../meal-types/reducer";
import bedTypes from "../bed-types/reducer";
import testRoomsTab from "../1test-rooms-tab/reducer";
import currencies from "../currencies/reducer";
import propertyTypes from "../property-type/reducer";
import simpleModal from "../simple-modal/reducer";
import userCabinetProperties from "../user-cabinet-properties-tab/reducer";
import propertyEdit from "../property-edit/reducer";

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
    review,
    userVerified,
    userSettings,
    userCabinet,
    resetPassword,
    forgotPassword,
    countries,
    languages,
    facilities,
    availabilityCalendar,
    paymentTypes,
    roomTypes,
    meals,
    mealTypes,
    bedTypes,
    testRoomsTab,
    userCabinetProperties,
    currencies,
    propertyTypes,
    simpleModal,
    propertyEdit
});
