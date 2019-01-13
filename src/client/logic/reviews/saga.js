import { call, put, takeLatest, all } from "redux-saga/effects";
import reviewService from "../../services/reviewService";
import propertyService from "../../services/propertyService";
import * as actionTypes from "./actionTypes";

function* createReview(action) {
    try {
        // console.log(reviewService.createReview);
        const reviewResponse = yield call(
            reviewService.createReview,
            action.payload
        );
        yield put({
            type: actionTypes.CREATE_REVIEW_SUCCESS,
            payload: {
                ...reviewResponse.data
            }
        });
    } catch (error) {
        yield put({ type: actionTypes.CREATE_REVIEW_FAILED });
    }
}

function* updateProperty(action) {
    try {
        // console.log(propertyService.updateProperty);
        const propertyResponse = yield call(
            propertyService.updateProperty,
            action.payload
        );
        yield put({
            type: actionTypes.UPDATE_PROPERTY_SUCCESS,
            payload: {
                ...propertyResponse.data
            }
        });
    } catch (error) {
        yield put({ type: actionTypes.UPDATE_PROPERTY_FAILED });
    }
}

export default function* propertySaga() {
    yield all([
        takeLatest(actionTypes.CREATE_REVIEW, createReview), // Catches action with type CREATE_REVIEW - it doesn't
        // handles in reducer, create review generator function takes this action object, then process it, maybe do
        // async call and put new Action with another type - that Action need to be handled in reducer
        takeLatest(actionTypes.UPDATE_PROPERTY, updateProperty)
    ]);
}
