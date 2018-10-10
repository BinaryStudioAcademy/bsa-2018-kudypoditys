import { bookingInputUpdate } from "../../logic/property-page/actions";

export function mapStateToProps({userCabinet, propertyPage, header}) {
    return {
        user: userCabinet.user,
        property: propertyPage.property,
        rooms: propertyPage.rooms, // TODO: rooms that available to get into
        currency: header.selectedCurrency,
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
