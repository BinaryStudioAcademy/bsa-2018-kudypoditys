import { CITY_INFOS_GET,
         CITY_INFOS_GET_SUCCESS,
         CITY_INFOS_GET_FAILD
        } from './actionType';
import {all, put, call, takeLatest} from "redux-saga/effects";
import PropertyService from 'client/services/propertyService';
import api from "../../helpers/api";


function* getProperties(action) {
    console.log('Hello from SAGA' + action.type)
    const URL1 = `1/${action.payload}`
    const URL2 = `2/${action.payload}`
    const URL3 = `3/${action.payload}`
    const URL4 = `4/${action.payload}`
    const URL5 = `5/${action.payload}`
    const URL6 = `6/${action.payload}`
    try {
        const response1 = yield call(PropertyService.getPropertiesByCity, URL1 );
        const response2 = yield call(PropertyService.getPropertiesByCity, URL2 );
        const response3 = yield call(PropertyService.getPropertiesByCity, URL3 );
        const response4 = yield call(PropertyService.getPropertiesByCity, URL4 );
        const response5 = yield call(PropertyService.getPropertiesByCity, URL5 );
        const response6 = yield call(PropertyService.getPropertiesByCity, URL6 );

        yield put({
            type :CITY_INFOS_GET_SUCCESS,
            payload: [response1, response2, response3, response4, response5, response6]
        });
    }
    catch (error) {
        console.log(error)
        yield put({ type:CITY_INFOS_GET_FAILD})
    }
}

export default function* bannerListSaga() {
    yield all([
        takeLatest(CITY_INFOS_GET, getProperties)
    ])
}
const cities = ['1','2','3','4','5','6']