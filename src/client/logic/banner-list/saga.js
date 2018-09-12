import {
    CITY_INFOS_GET,
    CITY_INFOS_GET_SUCCESS,
    CITY_INFOS_GET_FAILD
} from "./actionType";
import { all, put, call, takeLatest } from "redux-saga/effects";
import propertyService from "client/services/propertyService";
import api from "../../helpers/api";
import * as actionTypes from "../user-cabinet-properties-tab/actionTypes";
// function* getProperties() {
//     const id = [1, 2,3,4,5,6,7]
//
//
//
//
//     try {
//
//         const propetyResponse1 = yield call(
//             propertyService.getPropertiesByCity,
//             id
//         );
//
//
//
//
//         yield put({
//             type: CITY_INFOS_GET_SUCCESS,
//             payload: {
//                 propetyResponse1
//             }
//         });
//
//     } catch (error) {
//         console.log(error);
//         yield put({ type:  CITY_INFOS_GET_FAILD });
//     }
// }
function* getProperties(action) {
    const URL1 = `http://localhost:5000/api/property/city/1`;
    const URL2 = `http://localhost:5000/api/property/city/2`;
    const URL3 = `http://localhost:5000/api/property/city/3`;
    const URL4 = `http://localhost:5000/api/property/city/4`;
    const URL5 = `http://localhost:5000/api/property/city/5`;
    const URL6 = `http://localhost:5000/api/property/city/6`;
    // const URL1 = `1`
    // const URL2 = `2`
    // const URL3 = `3`
    // const URL4 = `4`
    // const URL5 = `5`
    // const URL6 = `6`
    try {
        const response1 = yield call(fetch, URL1);
        let Lviv = yield response1.json();
        const response2 = yield call(fetch, URL2);
        let Kiev = yield response2.json();
        const response3 = yield call(fetch, URL3);
        let Ternopil = yield response3.json();
        const response4 = yield call(fetch, URL4);
        let Odessa = yield response4.json();
        const response5 = yield call(fetch, URL5);
        let Kharkiv = yield response5.json();
        const response6 = yield call(fetch, URL6);
        let Dnipro = yield response6.json();

//         // const response1 = yield call(PropertyService.getPropertiesByCity);
//         // var body1 = yield response1.json();
//         // const response2 = yield call(PropertyService.getPropertiesByCity, URL2 );
//         // var body2 = yield response2//.json();
//         // const response3 = yield call(PropertyService.getPropertiesByCity, URL3 );
//         // var body3 = yield response3//.json();
//         // const response4 = yield call(PropertyService.getPropertiesByCity, URL4 );
//         // var body4 = yield response4//.json();
//         // const response5 = yield call(PropertyService.getPropertiesByCity, URL5 );
//         // var body5 = yield response5//.json();
//         // const response6 = yield call(PropertyService.getPropertiesByCity, URL6 );
//         // var body6 = yield response6//.json();
//
//         // const response = yield call(
//         //     api.sendRequest,
//         //     `/api/property/city/1`,
//         //     "get"
//         // );
//         // const response = JSON.parse(propetyResponse)
//         // console.log(response.data + ' SAGA LOG')
//         // // some logic
//         // //console.log(propetyResponse.data);
//         // var counter = 0;
//         // var propertySum = 0;
//         // for(const property in response){
//         //     for(const room in property){
//         //         propertySum += Number(room.price)
//         //         counter++
//         //     }
//         // }
//         // console.log(propertySum/counter)
//
        yield put({
            type: CITY_INFOS_GET_SUCCESS,
            payload: {Lviv, Dnipro, Ternopil, Kiev,Odessa,Kharkiv }
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
