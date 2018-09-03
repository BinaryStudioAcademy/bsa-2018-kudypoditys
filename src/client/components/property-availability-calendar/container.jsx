import {
    availabilitySubmit,
    calendarUpdate,
    getUserpropertiesInfo
} from "client/logic/property-availability-calendar/actions";

export function mapStateToProps(state, ownprops) {
    console.log(state);
    const { availabilityCalendar } = state;
    console.log(availabilityCalendar);
    return {
        ...availabilityCalendar
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
