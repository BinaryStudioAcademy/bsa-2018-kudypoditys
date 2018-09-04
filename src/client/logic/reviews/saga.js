import {call, put, takeLatest, all} from 'redux-saga/effects';
import reviewService from 'client/services/reviewService';
import * as actionTypes from './actionTypes';


function* createReview(action) {
    try {
        console.log("saga createReview");
        const reviewResponse = yield call(reviewService.createReview, action.payload);
        yield put({
            type: actionTypes.CREATE_REVIEW_SUCCESS,
            payload: {
                ...reviewResponse.data
            }
        });
    }
    catch (error) {
        console.log(error.message)
        yield put({type: actionTypes.CREATE_REVIEW_FAILED})
    }
}

// function* updateProperty(action) {
//     try {
//         yield call(propertyService.updateProperty, action.payload);
//         yield put({
//             type:actionTypes.UPDATE_REVIEW_SUCCESS,
//             payload: action.payload
//         });
//     }
//     catch (error) {
//         yield put({ type:actionTypes.UPDATE_REVIEW_FAILED  })
//     }
// }

export default function* propertySaga() {
    yield all([
        takeLatest(actionTypes.CREATE_REVIEW, createReview)
        // takeLatest(actionTypes.UPDATE_PROPERTY, updateProperty)
    ])
}
