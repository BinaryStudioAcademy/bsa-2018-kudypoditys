import { checkInOutUpdate } from 'client/logic/polices-tab/actions';
import { propertyUpdate } from 'client/logic/property-creation-tabs/actions';
export function mapStateToProps(state) {
    const { propertyRegistration } = state;

    return {
        // propertyRegistration
        arrivalFrom: propertyRegistration.arrivalFrom,
        arrivalTo: propertyRegistration.arrivalTo,
        departureFrom: propertyRegistration.departureFrom,
        departureTo: propertyRegistration.departureTo,
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        onSelectTime(value, type) {
            dispatch(
                propertyUpdate({
                    [type]: value,
                }),
            );
        },
    };
}
