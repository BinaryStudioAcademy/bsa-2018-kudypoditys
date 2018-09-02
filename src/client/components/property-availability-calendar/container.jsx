import {
    availabilitySubmit,
    calendarUpdate,
    getUserpropertiesInfo
} from "client/logic/property-availability-calendar/actions";

export function mapStateToProps(state, ownprops) {
    console.log(this.props);
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
        },
        handleUserInfo(data) {
            dispatch(getUserpropertiesInfo(data));
        }
    };
}
