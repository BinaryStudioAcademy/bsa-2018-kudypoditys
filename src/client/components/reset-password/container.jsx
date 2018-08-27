import {submitPassword} from "client/logic/reset-password/actions";


export function mapStateToProps(state) {
    const {resetPassword} = state;
    return {
        ...resetPassword
    }
}

export function mapDispatchToProps(dispatch) {
    return {
        resetPassword(passwords) {
            dispatch(submitPassword(passwords))
        }
    }
}
