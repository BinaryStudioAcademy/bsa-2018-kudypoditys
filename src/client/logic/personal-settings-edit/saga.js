import {USER_SETTINGS_SEND} from "./actionTypes";
import { all, call, takeLatest, put } from "redux-saga/effects";

function* sendSettings(action) {
    try {
        yield call();
    } catch (err) {
        console.log(err);
    }
}

export default function* personalSettingsSaga() {
    all([takeLatest(USER_SETTINGS_SEND, sendSettings)])
}