import {
    getPropertyInfoById,
    bookingInputUpdate,
    getRoomsInfo
} from "../../logic/property-page/actions";
import { getUserBookings } from "../../logic/user-cabinet/actions";

export function mapStateToProps(state, ownProps) {
    const { user } = state.userCabinet;
    const { property, rooms } = state.propertyPage;
    const { checkIn, checkOut } = state.propertyPage.availabilityInput;
    return {
        property: property,
        rooms: rooms,
        user: user,
        checkIn: checkIn,
        checkOut: checkOut
    };
}

export function mapDispatchToProps(dispatch, ownProps) {
    return {
        getRooms(propertyId, checkIn, checkOut) {
            dispatch(getRoomsInfo(propertyId, checkIn, checkOut));
        },
        getProperty(id) {
            dispatch(getPropertyInfoById(id));
        },
        getBookings() {
            dispatch(getUserBookings());
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
