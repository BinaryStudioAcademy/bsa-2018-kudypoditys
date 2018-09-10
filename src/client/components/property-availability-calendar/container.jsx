import {
    availabilitySubmit,
    calendarUpdate,
    selectedRoomChange
} from "client/logic/property-availability-calendar/actions";

export function mapStateToProps(state) {
    const { availabilityCalendar } = state;
    const { userCabinet } = state;
    return {
        ...availabilityCalendar,
        userId: userCabinet.user.id
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        handleSubmit(data) {
            dispatch(availabilitySubmit(data));
        },
        handleUpdate(data) {
            dispatch(calendarUpdate(data));
        },
        selectedRoomChange(data) {
            dispatch(selectedRoomChange(data));
        }
    };
}
