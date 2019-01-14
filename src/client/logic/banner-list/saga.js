import {
    CITY_INFOS_GET,
    CITY_INFOS_GET_SUCCESS,
    CITY_INFOS_GET_FAILD
} from "./actionType";
import { all, put, call, takeLatest } from "redux-saga/effects";
import { SERVER_HOST } from "../../helpers/config";

function* getProperties(action) {
    const urls = [
        `${SERVER_HOST}/api/property/city/1`,
        `${SERVER_HOST}/api/property/city/2`,
        `${SERVER_HOST}/api/property/city/3`,
        `${SERVER_HOST}/api/property/city/4`,
        `${SERVER_HOST}/api/property/city/5`,
        `${SERVER_HOST}/api/property/city/6`
    ]

    try {
        const responses = yield all(urls.map(u => call(fetch, u)));
        console.log(yield responses[0].json());
        const cities = yield all(responses.map(r => r.json()));
        yield put({
            type: CITY_INFOS_GET_SUCCESS,
            payload: cities
        });
    } catch (error) {
        console.log(error);
        yield put({ type: CITY_INFOS_GET_FAILD });
    }
}

export default function* bannerListSaga() {
    yield all([takeLatest(CITY_INFOS_GET, getProperties)]);
}
