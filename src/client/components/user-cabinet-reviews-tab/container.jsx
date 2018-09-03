import { getUserReviews } from "../../logic/user-cabinet/actions";

export function mapStateToProps(state, ownProps) {
    const { reviews } = state.userCabinet;
    return {
        ...reviews
    };
}

export function mapDispatchToProps(dispatch, ownProps) {
    return {
        getUserReviews() {
            dispatch(getUserReviews());
        }
    };
}
