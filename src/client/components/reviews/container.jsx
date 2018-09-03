import {reviewSubmit, reviewUpdate, ratingUpdate} from 'client/logic/reviews/actions';


export function mapStateToProps(state, ownProps) {
    // const reviewData = state;
    // const userCabinet = state.userCabinet;
    return {
        ...state

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
        }
    };
}
