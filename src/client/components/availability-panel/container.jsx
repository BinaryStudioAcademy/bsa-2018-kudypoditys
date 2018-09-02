import {
    availabilityInputUpdate,
    checkAvailability
} from "../../logic/property-page/actions";

export function mapStateToProps(state, ownProps) {
    const { property, availabilityInput } = state.propertyPage;
    return {
        propertyName: property.name,
        propertyId: property.id,
        checkIn: availabilityInput.checkIn,
        checkOut: availabilityInput.checkOut,
        adults: availabilityInput.adults,
        children: availabilityInput.children,
        rooms: availabilityInput.rooms,
        result: availabilityInput.result,
        error: availabilityInput.error
    };
}

export function mapDispatchToProps(dispatch, ownProps) {
    return {
        onAvailabilityCheck(value) {
            dispatch(checkAvailability(value));
        },
        onDatesChange(value) {
            dispatch(
                availabilityInputUpdate({
                    checkIn: value.startDate,
                    checkOut: value.endDate
                })
            );
        },
        onAdultsChange(value) {
            dispatch(availabilityInputUpdate({ adults: value }));
        },
        onChildrenChange(value) {
            dispatch(availabilityInputUpdate({ children: value }));
        },
        onRoomsChange(value) {
            dispatch(availabilityInputUpdate({ rooms: value }));
        }
    };
}
