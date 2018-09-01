import {
    getPropertyInfoById,
    bookingInputUpdate
} from "../../logic/property-page/actions";


export function mapStateToProps(state, ownProps) {
    const {user} = state.userCabinet;
    const {property} = state.propertyPage;

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
        clearBookingForm() {
            dispatch(bookingInputUpdate({message: "", error: ""}));
        }
    };
}
