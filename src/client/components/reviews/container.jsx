import {reviewSubmit, reviewUpdate, ratingUpdate, propertyUpdate} from 'client/logic/reviews/actions';


export function mapStateToProps(state, ownProps) {
    const reviewData = state.review;
    const {userCabinet} = state;
    return {
        ...userCabinet,
            ...reviewData
    }
}

export function mapDispatchToProps(dispatch) {
    return {
        submitReview(data) {
            dispatch(reviewSubmit(data));
        },
        updateReview(data) {
            dispatch(reviewUpdate(data));
        },
        updateRating(data) {
            dispatch(ratingUpdate(data));
        },
        updateProperty(data) {
            dispatch(propertyUpdate(data));
        }
    };
}
