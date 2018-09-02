import { call, put, takeLatest, all } from "redux-saga/effects";
import availabilityService from "client/services/availabilityService";
import propertyService from "client/services/propertyService";
import * as actionTypes from "./actionTypes";

function* createAvailability(action) {
    // try {
    //     console.log("saga createAvailability");
    //     const propetyResponse = yield call(
    //         availabilityService.createAvailability,
    //         action.payload
    //     );
    //     yield put({
    //         type: actionTypes.AVAILABILITY_UPDATE_SUBMIT,
    //         payload: {
    //             ...propetyResponse.data
    //         }
    //     });
    // } catch (error) {
    //     yield put({ type: actionTypes.AVAILABILITY_UPDATE_SUBMIT });
    // }
}

function* getUserpropertiesInfo(action) {
    try {
        console.log("saga get info for calendar");
        const propetyResponse = yield call(
            propertyService.getUserPropertiesInfo,
            action.payload
        );
        console.log("RESPONSE======", propetyResponse.data);
        yield put({
            type: actionTypes.GET_CURRENT_USER_INFO_SUCCESS,
            payload: {
                ...propetyResponse.data
            }
        });
    } catch (error) {
        yield put({ type: actionTypes.AVAILABILITY_UPDATE_SUBMIT });
    }
}

export default function* availabilitySaga() {
    yield all([
        takeLatest(actionTypes.AVAILABILITY_UPDATE_SUBMIT, createAvailability),
        takeLatest(actionTypes.GET_CURRENT_USER_INFO, getUserpropertiesInfo)
    ]);
}
