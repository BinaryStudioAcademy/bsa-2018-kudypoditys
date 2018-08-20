import { propertyRegistrationSubmit } from "client/logic/main-info-tab/actions";

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
