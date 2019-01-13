import { sendVerificationData } from "../../logic/verify-email/actions";

export function mapStateToProps(state) {
    const {userVerified} = state;
    return {
        ...userVerified
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        sendVerificationData() {
            dispatch(sendVerificationData());
        }
    }
}