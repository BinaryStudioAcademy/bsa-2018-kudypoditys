import {
    bookingInputUpdate,
    roomsSelectedAmountUpdate,
    toggleDescriptionCollapse
} from '../../logic/property-page/actions';

export function mapStateToProps({userCabinet, propertyPage, header}) {
    return {
        user: userCabinet.user,
        property: propertyPage.property,
        rooms: propertyPage.rooms, // TODO: rooms that available to get into
        currency: header.selectedCurrency,
        checkIn: propertyPage.availabilityInput.checkIn,
        checkOut: propertyPage.availabilityInput.checkOut
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        clearBookingForm() {
            dispatch(bookingInputUpdate({ message: "", error: "" }));
        },
        setRoom(roomId) {
            dispatch(bookingInputUpdate({ roomId: roomId }));
        },
        selectRoomsAmount(roomId, selectedRoomsAmount, rooms) {
            dispatch(roomsSelectedAmountUpdate(roomId, selectedRoomsAmount, rooms));
        },
        toggleRoomDescriptionCollapse(roomId) {
            dispatch(toggleDescriptionCollapse(roomId));
        }
    };
}
