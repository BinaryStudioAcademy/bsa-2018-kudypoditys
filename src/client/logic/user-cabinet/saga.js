import { call, put, all, takeLatest } from "redux-saga/effects";
import * as actionTypes from "./actionTypes";
import api from "../../helpers/api";
import userService from "client/services/userService";

export default function* userCabinetSaga() {
    function* getBookings(action) {
        try {
            const response = yield call(
                api.sendAuthRequest,
                "/api/reservation/byuser",
                "get"
            );
            yield put({
                type: actionTypes.GET_USER_BOOKINGS_SUCCESS,
                payload: response.data
            });
        } catch (err) {
            console.log(err.message);
            yield put({
                type: actionTypes.GET_USER_BOOKINGS_FAILURE,
                payload: err
            });
        }
    }

    function* getReviews(action) {
        try {
            const reviewsResponse = yield call(
                userService.getUserReviews,
                action.payload.id
            );
            yield put({
                type: actionTypes.GET_USER_REVIEWS_SUCCESS,
                payload: reviewsResponse.data
            });
        } catch (error) {
            console.log(error.message);
            yield put({ type: actionTypes.GET_USER_REVIEWS_FAILURE });
        }
    }

    function* cancelBooking(action) {
        try {
            const response = yield call(
                api.sendAuthRequest,
                `/api/reservation/${action.payload.id}`,
                "delete"
            );
            yield put({
                type: actionTypes.CANCEL_BOOKING_SUCCESS,
                payload: response.data
            });
        } catch (err) {
            console.log(err.message);
            yield put({
                type: actionTypes.CANCEL_BOOKING_FAILURE,
                payload: err
            });
        }
    }

    yield all([
        takeLatest(actionTypes.GET_USER_BOOKINGS, getBookings),
        takeLatest(actionTypes.CANCEL_BOOKING, cancelBooking),
        takeLatest(actionTypes.GET_USER_REVIEWS, getReviews)
    ]);
}
