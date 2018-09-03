import {
    availabilitySubmit,
    calendarUpdate,
    getUserpropertiesInfo
} from "client/logic/property-availability-calendar/actions";


export function mapStateToProps(state, ownprops) {
    const {availabilityCalendar} = state;
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
        handleUserInfo(id) {
            dispatch(getUserpropertiesInfo(id));
        }
    };
}
