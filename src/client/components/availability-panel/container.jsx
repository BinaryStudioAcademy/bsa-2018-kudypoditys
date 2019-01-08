import {
    availabilityInputUpdate,
    checkAvailability,
    getRoomsInfo
} from "../../logic/property-page/actions";

export function mapStateToProps(state, ownProps) {
    const { property, availabilityInput, rooms } = state.propertyPage;
    return {
        propertyName: property.name,
        propertyId: property.id,
        checkIn: new Date(availabilityInput.checkIn.get('millisecond')),
        checkOut: new Date(availabilityInput.checkOut.get('millisecond')),
        adults: availabilityInput.adults,
        children: availabilityInput.children,
        rooms: availabilityInput.rooms,
        result: rooms,
        error: availabilityInput.error
    };
}

export function mapDispatchToProps(dispatch, ownProps) {
    return {
        onAvailabilityCheck(value) {
            dispatch(checkAvailability(value));
        },
        onDatesChange(propertyId, value) {
            dispatch(
                availabilityInputUpdate({
                    checkIn: value.startDate,
                    checkOut: value.endDate
                })
            );
            dispatch(getRoomsInfo(propertyId, value.startDate, value.endDate));
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
