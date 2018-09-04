import { all, fork } from "redux-saga/effects";
import loginSaga from "client/logic/login/saga";
import signupSaga from "client/logic/registration/saga";
import headerSaga from "client/logic/header/saga";
import userCabinetSaga from "./user-cabinet/saga";
import propertyRegistrationSaga from "./property-registration/saga";
import emailVerificationSaga from "client/logic/verify-email/saga";
import reviewSaga from 'client/logic/reviews/saga';
import propertyPageSaga from "./property-page/saga";
import searchSaga from "./search/saga";
import personalSettingsSaga from "./personal-settings-edit/saga";
import bannerListSaga from './banner-list/saga';
import availabilityCalendar from "client/logic/property-availability-calendar/saga";
import resetPasswordSaga from 'client/logic/reset-password/saga';
import forgotPasswordSaga from 'client/logic/forgot-password/saga';
import countriesSaga from 'client/logic/countries/saga';
import facilitiesSaga from 'client/logic/facilities/saga';
import languagesSaga from 'client/logic/languages/saga';
import paymentTypesSaga from 'client/logic/payment-type/saga';

export default function* rootSaga() {
  yield all([
    fork(loginSaga),
    fork(headerSaga),
    fork(propertySaga),
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

    fork(propertyRegistrationSaga),
    fork(countriesSaga),
    fork(facilitiesSaga),
    fork(languagesSaga),
    fork(paymentTypesSaga),
  ]);
}
