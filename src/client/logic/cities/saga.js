import { CITIES_GET, CITIES_GET_SUCCESS, CITIES_GET_FAILD } from "./actionType";
import { all, put, call, takeLatest } from "redux-saga/effects";
import { SERVER_HOST } from "../../helpers/config";
import { normalize } from "normalizr";
import { citySchema } from "./city.schema";

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
        const cities = yield all(responses.map(r => r.json()));
        const { result, entities } = normalize(cities, [
            citySchema
        ]);

        yield put({
            type: CITIES_GET_SUCCESS,
            payload: {
                entities: entities,
                all: result
            }
        });
    } catch (error) {
        console.log(error);
        yield put({ type: CITIES_GET_FAILD });
    }
}

export default function* bannerListSaga() {
    yield all([takeLatest(CITIES_GET, getProperties)]);
}
