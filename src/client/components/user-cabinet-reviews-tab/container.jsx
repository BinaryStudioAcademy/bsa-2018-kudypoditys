import { getUserReviews } from "../../logic/user-cabinet/actions";

export function mapStateToProps(state, ownProps) {
    const { userCabinet } = state;
    return {
        ...userCabinet
    };
}

export function mapDispatchToProps(dispatch, ownProps) {
    return {
        getUserReviews(data) {
            dispatch(getUserReviews(data));
        }
    };
}
