import {
    availabilitySubmit,
    calendarUpdate
} from "client/logic/property-availability-calendar/actions";

export function mapStateToProps(state, ownprops) {
    const { propertyCalendar } = state;
    return {
        ...propertyCalendar
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        handleSubmit(userData) {
            dispatch(availabilitySubmit(userData));
        },
        handleUpdate(data) {
            dispatch(calendarUpdate(data));
        }
    };
}
