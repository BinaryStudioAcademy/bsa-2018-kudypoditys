import { all, fork } from "redux-saga/effects";
import loginSaga from "../login/saga";
import signupSaga from "../registration/saga";
import headerSaga from "../header/saga";
import userCabinetSaga from "./user-cabinet/saga";
import propertyRegistrationSaga from "./property-registration/saga";
import emailVerificationSaga from "../verify-email/saga";``
import reviewSaga from "../reviews/saga";
import propertyPageSaga from "./property-page/saga";
import searchSaga from "./search/saga";
import personalSettingsSaga from "./user-cabinet-settings/saga";
import bannerListSaga from "./banner-list/saga";
import availabilityCalendar from "../property-availability-calendar/saga";
import resetPasswordSaga from "../reset-password/saga";
import forgotPasswordSaga from "../forgot-password/saga";
import countriesSaga from "../countries/saga";
import facilitiesSaga from "../facilities/saga";
import languagesSaga from "../languages/saga";
import paymentTypesSaga from "../payment-type/saga";
import roomTypesSaga from "../room-types/saga";
import mealsSaga from "../meals/saga";
import mealTypesSaga from "../meal-types/saga";
import bedTypesSaga from "../bed-types/saga";
import currenciesSaga from "../currencies/saga";
import propertyTypesSaga from "../property-type/saga";
import userCabinetPropertiesSaga from "../user-cabinet-properties-tab/saga";
import propertyEditSaga from "../property-edit/saga";
import mealsInRoomSaga from "../mealInRoom/saga";

export default function* rootSaga() {
    yield all([
        fork(loginSaga),
        fork(headerSaga),
        fork(signupSaga),
        fork(personalSettingsSaga),
        fork(userCabinetSaga),
        fork(emailVerificationSaga),
        fork(reviewSaga),
        fork(propertyPageSaga),
        fork(searchSaga),
        fork(resetPasswordSaga),
        fork(forgotPasswordSaga),
        fork(bannerListSaga),
        fork(availabilityCalendar),
        // fork(propertySaga) ???
        fork(propertyRegistrationSaga),
        fork(countriesSaga),
        fork(facilitiesSaga),
        fork(languagesSaga),
        fork(paymentTypesSaga),
        fork(roomTypesSaga),
        fork(mealsSaga),
        fork(mealTypesSaga),
        fork(bedTypesSaga),
        fork(currenciesSaga),
        fork(propertyTypesSaga),
        fork(userCabinetPropertiesSaga),
        fork(propertyEditSaga),
        fork(mealsInRoomSaga)
    ]);
}
