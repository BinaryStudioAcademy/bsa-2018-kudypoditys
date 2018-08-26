import {emailInput} from "client/logic/forgot-password/actions";


export function mapStateToProps(state) {
    const {resetPassword} = state;
    return {
        ...resetPassword
    }
}

export function mapDispatchToProps(dispatch) {
    return {
        inputEmail(email) {
            dispatch(emailInput(email))
        }
    }
}
