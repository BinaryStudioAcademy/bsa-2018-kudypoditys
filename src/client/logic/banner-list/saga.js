import { CITY_INFOS_GET,
         CITY_INFOS_GET_SUCCESS,
         CITY_INFOS_GET_FAILD
        } from './actionType';
import {all, put, call, takeLatest} from "redux-saga/effects";
import PropertyService from 'client/services/propertyService';

function* getProperties(action) {
    console.log('Hello from SAGA' + action.type)
    try {
        const propetyResponse = yield call(PropertyService.getPropertiesByCity, city);
        console.log(propetyResponse.data+' SAGA LOG')
        // some logic
        yield put({
            type:CITY_INFOS_GET_SUCCESS,
            propetyResponse
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
const city = 'Lviv'