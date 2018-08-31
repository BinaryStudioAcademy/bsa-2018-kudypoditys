import { reviewSubmit, reviewUpdate } from 'client/logic/reviews/actions';

export function mapStateToProps(state, ownProps) {
        const reviewData = state.review;
    const {userCabinet} = state;
    return  {
        ...reviewData,
        ...userCabinet

    }
}

export function mapDispatchToProps(dispatch) {
    return {
        submitReview(data) {
            dispatch(reviewSubmit(data));
        },
        updateReview(data) {
            dispatch(reviewUpdate(data));
        }
    };
}
