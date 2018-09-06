import {
    CITY_INFOS_GET,
    CITY_INFOS_GET_SUCCESS,
    CITY_INFOS_GET_FAILD
} from "./actionType";
import { all, put, call, takeLatest } from "redux-saga/effects";
import PropertyService from "client/services/propertyService";
import api from "../../helpers/api";
import { SERVER_HOST } from "../../helpers/config";

function* getProperties(action) {
    console.log("Hello from SAGA" + action.type);

    const URL1 = `${SERVER_HOST}/api/property/city/1`;
    const URL2 = `${SERVER_HOST}/api/property/city/2`;
    const URL3 = `${SERVER_HOST}/api/property/city/3`;
    const URL4 = `${SERVER_HOST}/api/property/city/4`;
    const URL5 = `${SERVER_HOST}/api/property/city/5`;
    const URL6 = `${SERVER_HOST}/api/property/city/6`;
    // const URL1 = `1`
    // const URL2 = `2`
    // const URL3 = `3`
    // const URL4 = `4`
    // const URL5 = `5`
    // const URL6 = `6`
    try {
        const response1 = yield call(fetch, URL1);
        var body1 = yield response1.json();
        const response2 = yield call(fetch, URL2);
        var body2 = yield response2.json();
        const response3 = yield call(fetch, URL3);
        var body3 = yield response3.json();
        const response4 = yield call(fetch, URL4);
        var body4 = yield response4.json();
        const response5 = yield call(fetch, URL5);
        var body5 = yield response5.json();
        const response6 = yield call(fetch, URL6);
        var body6 = yield response6.json();

        // const response1 = yield call(PropertyService.getPropertiesByCity, URL1 );
        // var body1 = yield response1//.json();
        // const response2 = yield call(PropertyService.getPropertiesByCity, URL2 );
        // var body2 = yield response2//.json();
        // const response3 = yield call(PropertyService.getPropertiesByCity, URL3 );
        // var body3 = yield response3//.json();
        // const response4 = yield call(PropertyService.getPropertiesByCity, URL4 );
        // var body4 = yield response4//.json();
        // const response5 = yield call(PropertyService.getPropertiesByCity, URL5 );
        // var body5 = yield response5//.json();
        // const response6 = yield call(PropertyService.getPropertiesByCity, URL6 );
        // var body6 = yield response6//.json();

        // const response = yield call(
        //     api.sendRequest,
        //     `/api/property/city/1`,
        //     "get"
        // );
        // const response = JSON.parse(propetyResponse)
        // console.log(response.data + ' SAGA LOG')
        // // some logic
        // //console.log(propetyResponse.data);
        // var counter = 0;
        // var propertySum = 0;
        // for(const property in response){
        //     for(const room in property){
        //         propertySum += Number(room.price)
        //         counter++
        //     }
        // }
        // console.log(propertySum/counter)

        yield put({
            type: CITY_INFOS_GET_SUCCESS,
            payload: [body1, body2, body3, body4, body5, body6]
        });
    } catch (error) {
        console.log(error);
        yield put({ type: CITY_INFOS_GET_FAILD });
    }
}

export default function* bannerListSaga() {
    yield all([takeLatest(CITY_INFOS_GET, getProperties)]);
}
const cities = ["1", "2", "3", "4", "5", "6"];
