import { all, fork } from "redux-saga/effects";
import loginSaga from "client/logic/login/saga";
import signupSaga from "client/logic/registration/saga";
import headerSaga from "client/logic/header/saga";
import userCabinetSaga from "./user-cabinet/saga";
import propertySaga from "./property-creation-tabs/saga";
import emailVerificationSaga from "client/logic/verify-email/saga";
import resetPasswordSaga from 'client/logic/reset-password/saga';
import forgotPasswordSaga from 'client/logic/forgot-password/saga';
import propertyPageSaga from "client/logic/property-page/saga";
import searchSaga from "client/logic/search/saga";
import personalSettingsSaga from 'client/logic/personal-settings-edit/saga';
import countriesSaga from 'client/logic/countries/saga';
import facilitiesSaga from 'client/logic/facilities/saga';
import languagesSaga from 'client/logic/languages/saga';

export default function* rootSaga() {
    yield all([
        fork(loginSaga),
        fork(headerSaga),
        fork(propertySaga),
        fork(signupSaga),
        fork(personalSettingsSaga),
        fork(userCabinetSaga),
        fork(propertyPageSaga),
        fork(emailVerificationSaga),
        fork(searchSaga),
        fork(resetPasswordSaga),
        fork(forgotPasswordSaga),
        fork(countriesSaga),
        fork(facilitiesSaga),
        fork(languagesSaga),
    ]);
}
