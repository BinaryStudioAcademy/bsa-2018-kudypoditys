import {
    bookingInputUpdate,
    bookProperty,
    getRoomsInfo
} from "../../logic/property-page/actions";

export function mapStateToProps(state, ownProps) {
    const { property, bookingInput } = state.propertyPage;
    return {
        propertyName: property.name,
        cancelForFree: property.accommodationRule.cancelReservation,
        propertyId: property.id,
        checkIn: bookingInput.checkIn,
        checkOut: bookingInput.checkOut,
        adults: bookingInput.adults,
        children: bookingInput.children,
        roomId: bookingInput.roomId,
        paymentTypeId: bookingInput.paymentTypeId,
        error: bookingInput.error,
        message: bookingInput.message
    };
}

export function mapDispatchToProps(dispatch, ownProps) {
    return {
        onBooking(value) {
            dispatch(bookProperty(value));
        },

        onDatesChange(propertyId, value) {
            dispatch(
                bookingInputUpdate({
                    checkIn: value.startDate,
                    checkOut: value.endDate
                })
            );
            dispatch(getRoomsInfo(propertyId, value.startDate, value.endDate));
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
        },
        clearBookingForm() {
            dispatch(
                bookingInputUpdate({
                    message: "",
                    error: ""
                })
            );
        }
    };
}
