import {
    call,
    put,
    all,
    takeLatest
} from "redux-saga/effects";
import * as actionTypes from "./actionTypes";
import { GET_ROOMS_SUCCESS } from "../rooms/actionTypes";
import api from "../../helpers/api";
import { normalize } from "normalizr";
import { propertySchema } from "./property.schema";

export default function* propertyPageSaga() {
    function* getPropertyInfo(action) {
        try {
            const response = yield call(
                api.sendRequest,
                `/api/property/${action.payload}`,
                "get"
            );
            const propertyData = response.data.property;

            //TODO: normalize property state
            const { result, entities } = normalize(propertyData, propertySchema);

            const property = {...Object.values(entities.property)[0], notes: response.data.notes }

            yield put({
                type: GET_ROOMS_SUCCESS,
                payload: {
                    entities : { rooms: entities.rooms },
                    all: Object.keys(entities.rooms).map(x => +x)
                }
            });
            yield put({
                type: actionTypes.GET_PROPERTY_INFO_SUCCESS,
                payload: property
            });
        } catch (err) {
            console.log(err);
            yield put({
                type: actionTypes.GET_PROPERTY_INFO_FAILURE,
                payload: err
            });
        }
    }

    function* bookProperty(action) {
        try {
            yield call(
                api.sendAuthRequest,
                "/api/reservation",
                "post",
                action.payload
            );
            yield put({
                type: actionTypes.BOOK_PROPERTY_SUCCESS,
                payload: "Your booking was a success!"
            });
        } catch (err) {
            return yield put({
                type: actionTypes.BOOK_PROPERTY_FAILURE,
                payload: err.message
            });
        }
    }

    function* checkAvailability(action) {
        try {
            const input = action.payload;
            if (!input.checkIn || !input.checkOut)
                return yield put({
                    type: actionTypes.CHECK_AVAILABILITY_FAILURE,
                    payload: "Fill in check-in and check-out dates to check availability"
                });

            const response = yield call(
                api.sendAuthRequest,
                "/api/property/availability",
                "put",
                input
            );

            // debugger;

            for (let i = 0; i < response.data.length; i++) {
                response.data[i] = {
                    ...response.data[i],
                    selectedAmount: 0,
                    descriptionCollapsed: true
                };
            }

            yield put({
                type: actionTypes.CHECK_AVAILABILITY_SUCCESS,
                payload: response.data
            });
        } catch (err) {
            return yield put({
                type: actionTypes.CHECK_AVAILABILITY_FAILURE,
                payload: err.message
            });
        }
    }

    function* getRoomsInfo(action) {
        try {
            //TODO api call
            const input = action.payload;
            const response = yield call(
                api.sendAuthRequest,
                "/api/property/availability",
                "put",
                input
            );

            for (let i = 0; i < response.data.length; i++) {
                response.data[i] = {
                    ...response.data[i],
                    selectedAmount: 0,
                    descriptionCollapsed: true
                };
            }

            yield put({
                type: actionTypes.GET_ROOMS_INFO_SUCCESS,
                payload: response.data
            });
        } catch (err) {
            yield put({
                type: actionTypes.GET_ROOMS_INFO_FAILURE,
                payload: err.message
            });
        }
    }

    yield all([
        takeLatest(actionTypes.GET_PROPERTY_INFO, getPropertyInfo),
        takeLatest(actionTypes.BOOK_PROPERTY, bookProperty),
        takeLatest(actionTypes.CHECK_AVAILABILITY, checkAvailability),
        takeLatest(actionTypes.GET_ROOMS_INFO, getRoomsInfo)
    ]);
}