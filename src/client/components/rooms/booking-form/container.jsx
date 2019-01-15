import {
    bookingInputUpdate,
    bookProperty,
    getRoomsInfo,
    roomsSelectedAmountUpdate
} from "../../../logic/property-page/actions";

export function mapStateToProps(state, ownProps) {
    const { property, bookingInput } = state.propertyPage;
    const room = ownProps.rooms.find(r => r.id === bookingInput.roomId);
    // console.log(room);
    const { selectedAmount, available, price } = room
        ? room
        : { selectedAmount: 1, amount: 1, price: 0 };

    return {
        // local props
        propertyName: property.name,
        propertyId: property.id,
        propertyCurrency: property.currency,
        currency: state.header.selectedCurrency,
        cancelForFree: property.accommodationRule.cancelReservation,
        checkIn: bookingInput.checkIn,
        checkOut: bookingInput.checkOut,
        adults: bookingInput.adults,
        children: bookingInput.children,
        roomId: bookingInput.roomId,
        selectedRoomsAmount: selectedAmount,
        roomsAmount: parseInt(available, 10),
        roomPrice: price,
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
            dispatch(
                bookingInputUpdate({
                    adults: value
                })
            );
        },
        onChildrenChange(value) {
            dispatch(
                bookingInputUpdate({
                    children: value
                })
            );
        },
        onRoomChange(roomId) {
            // , amount, selectedAmount, price || TODO: pass there its room's amount, selected amount, price
            dispatch(
                bookingInputUpdate({
                    roomId: roomId
                    // amount: amount,
                    // selectedAmount: selectedAmount,
                    // price: price
                })
            );
        },
        onPaymentTypeChange(value) {
            dispatch(
                bookingInputUpdate({
                    paymentTypeId: value
                })
            );
        },
        clearBookingForm() {
            dispatch(
                bookingInputUpdate({
                    message: "",
                    error: ""
                })
            );
        },
        selectRoomsAmount(roomId, rooms) {
            dispatch(roomsSelectedAmountUpdate(roomId, rooms));
        }
    };
}
