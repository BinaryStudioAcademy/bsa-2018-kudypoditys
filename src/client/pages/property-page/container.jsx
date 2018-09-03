import {
    getPropertyInfoById,
    bookingInputUpdate
} from "../../logic/property-page/actions";
import { getUserBookings } from "../../logic/user-cabinet/actions";

export function mapStateToProps(state, ownProps) {
    const { user } = state.userCabinet;
    const { property } = state.propertyPage;

    return {
        property: property,
        user: user
    };
}

export function mapDispatchToProps(dispatch, ownProps) {
    return {
        getProperty(id) {
            dispatch(getPropertyInfoById(id));
        },
        getBookings() {
            dispatch(getUserBookings());
        },
        clearBookingForm() {
            dispatch(bookingInputUpdate({ message: "", error: "" }));
        }
    };
}
