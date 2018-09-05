import { logout } from "../../logic/header/actions";

export function mapStateToProps(state) {
    const { user } = state.userCabinet;
    return {
        user: user
    };
}

export function mapDispatchToProps(dispatch, ownProps) {
    return {
        logout() {
            dispatch(logout());
        }
    };
}
