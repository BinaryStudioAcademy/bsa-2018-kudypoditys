import { all, fork } from "redux-saga/effects";
import loginSaga from "client/logic/login/saga";
import signupSaga from "client/logic/registration/saga";
import headerSaga from "client/logic/header/saga";
import userCabinetSaga from "./user-cabinet/saga";
import propertySaga from "./property-creation-tabs/saga";
import emailVerificationSaga from "client/logic/verify-email/saga";
import propertyPageSaga from "./property-page/saga";
import searchSaga from "./search/saga";
import personalSettingsSaga from "./personal-settings-edit/saga";

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
        fork(searchSaga)
    ]);
}
