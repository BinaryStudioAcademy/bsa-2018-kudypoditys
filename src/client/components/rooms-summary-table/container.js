import { bookingInputUpdate } from "../../logic/property-page/actions";

export function mapStateToProps(state) {
    const { user } = state.userCabinet;
    const { property } = state.propertyPage;
    return {
        user: user,
        property: property,
        currency: state.header.selectedCurrency,
        checkIn: state.propertyPage.availabilityInput.checkIn,
        checkOut: state.propertyPage.availabilityInput.checkOut
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        clearBookingForm() {
            dispatch(bookingInputUpdate({ message: "", error: "" }));
        },
        setRoom(roomId) {
            dispatch(bookingInputUpdate({ roomId: roomId }));
        }
    };
}
