import {bookingInputUpdate} from "../../logic/property-page/actions";


export function mapStateToProps(state) {
    const {user} = state.userCabinet;
    const {property} = state.propertyPage;
    return {
        user: user,
        property: property
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        clearBookingForm() {
            dispatch(bookingInputUpdate({message: "", error: ""}));
        }
    };
}
