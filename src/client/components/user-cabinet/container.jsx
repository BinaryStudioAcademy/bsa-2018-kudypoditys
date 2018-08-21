import { getCurrentUser } from "../../logic/login/actions";

export function mapStateToProps(state, ownProps) {
    const { currentUser } = state.header;
    return {
        user: currentUser
    };
}

export function mapDispatchToProps(dispatch, ownProps) {
    return {
        getUser() {
            dispatch(getCurrentUser());
        }
    };
}
