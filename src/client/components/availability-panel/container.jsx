import {availabilityInputUpdate} from "../../logic/property-page/actions";

export function mapStateToProps(state, ownProps) {
    const {property, availabilityInput} = state.propertyPage;
    return {
        propertyName: property.name,
        checkIn: availabilityInput.checkIn,
        checkOut: availabilityInput.checkOut,
        adults: availabilityInput.adults,
        children: availabilityInput.children,
        rooms: availabilityInput.rooms
    };
}

export function mapDispatchToProps(dispatch, ownProps) {
    return {
        onDatesChange(value) {
            dispatch(
                availabilityInputUpdate({
                    checkIn: value.startDate,
                    checkOut: value.endDate
                })
            );
        },
        onAdultsChange(value) {
            dispatch(availabilityInputUpdate({adults: value}));
        },
        onChildrenChange(value) {
            dispatch(availabilityInputUpdate({children: value}));
        },
        onRoomsChange(value) {
            dispatch(availabilityInputUpdate({rooms: value}));
        }
    };
}
