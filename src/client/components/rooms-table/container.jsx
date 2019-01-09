import {
    bookingInputUpdate,
    roomsSelectedAmountUpdate,
    toggleDescriptionCollapse
} from '../../logic/property-page/actions';

export function mapStateToProps(state) {
    const {userCabinet, propertyPage, header} = state;
    return {
        user: userCabinet.user,
        property: propertyPage.property,
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
            rooms = rooms.map(room=>{
                if (room.id === roomId) room.selectedAmount = selectedRoomsAmount;
                return room;
            });
            dispatch(roomsSelectedAmountUpdate(roomId, rooms));
        },
        toggleRoomDescriptionCollapse(roomId) {
            dispatch(toggleDescriptionCollapse(roomId));
        }
    };
}
