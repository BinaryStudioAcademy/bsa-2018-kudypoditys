import {
    availabilitySubmit,
    calendarUpdate,
    getUserpropertiesInfo
} from "client/logic/property-availability-calendar/actions";

export function mapStateToProps(state) {
    const { availabilityCalendar } = state;
    const { userCabinet } = state;
    console.log("mapStateToProps", availabilityCalendar);
    return {
        ...availabilityCalendar,
        userId: userCabinet.user.id
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        handleSubmit(userData) {
            dispatch(availabilitySubmit(userData));
        },
        handleUpdate(data) {
            dispatch(calendarUpdate(data));
        },
        fetchUserInfo(id) {
            dispatch(getUserpropertiesInfo(id));
        }
    };
}
