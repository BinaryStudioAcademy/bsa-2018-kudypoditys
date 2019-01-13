import { checkInOutUpdate } from "../../logic/checkInCheckOut/actions";

export function mapStateToProps(state) {
    const { checkInCheckOut } = state;

    return {
        arrivalFrom: checkInCheckOut.arrivalFrom,
        arrivalTo: checkInCheckOut.arrivalTo,
        departureFrom: checkInCheckOut.departureFrom,
        departureTo: checkInCheckOut.departureTo,
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        updateCheckInCheckOut(payload) {
            dispatch(checkInOutUpdate(payload));
        },
    };
}
