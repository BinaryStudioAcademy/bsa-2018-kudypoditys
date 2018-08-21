import {logout} from "../../logic/header/actions";


export function mapStateToProps(state, ownProps) {
    const {currentUser} = state.header;
    return {
        user: currentUser
    };
}

export function mapDispatchToProps(dispatch, ownProps) {
    return {
        logout() {
            dispatch(logout());
        }
    };
}
