import { bookingInputUpdate } from "../../logic/property-page/actions";

export function mapStateToProps(state, ownProps) {
    const { property, bookingInput } = state.propertyPage;
    return {
        propertyName: property.name,
        checkIn: bookingInput.checkIn,
        checkOut: bookingInput.checkOut,
        adults: bookingInput.adults,
        children: bookingInput.children,
        roomId: bookingInput.roomId,
        paymentTypeId: bookingInput.paymentTypeId,
        error: bookingInput.error
    };
}

export function mapDispatchToProps(dispatch, ownProps) {
    return {
        onDatesChange(value) {
            dispatch(
                bookingInputUpdate({
                    checkIn: value.startDate,
                    checkOut: value.endDate
                })
            );
        },
        onAdultsChange(value) {
            dispatch(bookingInputUpdate({ adults: value }));
        },
        onChildrenChange(value) {
            dispatch(bookingInputUpdate({ children: value }));
        },
        onRoomChange(value) {
            dispatch(bookingInputUpdate({ roomId: value }));
        },
        onPaymentTypeChange(value) {
            dispatch(bookingInputUpdate({ paymentTypeId: value }));
        }
    };
}
