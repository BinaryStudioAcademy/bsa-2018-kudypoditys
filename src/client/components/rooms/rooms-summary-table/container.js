import { bookingInputUpdate } from "../../../logic/property-page/actions";

export function mapStateToProps(state) {
    const { user } = state.userCabinet;
    const { property } = state.propertyPage;
    return {
        user: user,
        property: property,
        currency: state.header.selectedCurrency,
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
