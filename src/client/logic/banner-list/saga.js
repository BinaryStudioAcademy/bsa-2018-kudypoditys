import { CITY_INFOS_GET,
         CITY_INFOS_GET_SUCCESS,
         CITY_INFOS_GET_FAILD
        } from './actionType';
import {all, put, call, takeLatest} from "redux-saga/effects";
// import PropertyService from 'client/services/propertyService';
import api from "../../helpers/api";


function* getProperties(action) {
    console.log('Hello from SAGA' + action.type)
    const URL = `http://localhost:5000/api/property/city/1`
    try {
        // const response = yield call(fetch, URL );
        const response = yield call(
            api.sendRequest,
            `/api/property/city/1`,
            "get"
        );
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
            type:CITY_INFOS_GET_SUCCESS,
            payload: response.data
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