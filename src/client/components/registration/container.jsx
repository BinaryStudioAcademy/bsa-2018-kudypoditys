import { registerSubmit } from "client/logic/registration/actions";

export function mapStateToProps({ form }) {
    const { registration } = form;
    return {
        ...registration
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        handleRegistrationSubmit(userData) {
            //TODO input for this params
            userData.appeal = "Mrs.";
            userData.preferredCurrency = "USD";
            userData.countryId = 1;
            userData.paymentTypeId = 1;
            console.log(userData);
            dispatch(registerSubmit(userData));
        }
    };
}
