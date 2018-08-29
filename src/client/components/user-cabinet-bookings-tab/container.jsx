import {
    getUserBookings,
    chooseBooking,
    unchooseBooking
} from "../../logic/user-cabinet/actions";


export function mapStateToProps(state, ownProps) {
    const {user, bookings, activeBooking} = state.userCabinet;
    return {
        user: user,
        bookings: bookings,
        activeBooking: activeBooking
    };
}

export function mapDispatchToProps(dispatch, ownProps) {
    return {
        getBookings() {
            dispatch(getUserBookings());
        },

        chooseBooking(booking) {
            dispatch(chooseBooking(booking));
        },

        unchooseBooking() {
            dispatch(unchooseBooking());
        }
    };
}
