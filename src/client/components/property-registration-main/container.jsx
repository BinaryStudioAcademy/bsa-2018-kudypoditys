import { propertyRegistrationSubmit } from "client/logic/property-registration-main/actions";

export function mapStateToProps(state) {
    return {};
}

export function mapDispatchToProps(dispatch) {
    return {
        registerProperty() {
            dispatch(propertyRegistrationSubmit());
        },
    };
}
