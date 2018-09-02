import {
    availabilitySubmit,
    calendarUpdate,
    getUserpropertiesInfo
} from "client/logic/property-availability-calendar/actions";

export function mapStateToProps(state, ownprops) {
    const { propertyCalendar } = state;
    console.log("mapStateToProps", this.propertyCalendar);
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
        handleUserInfo(id) {
            dispatch(getUserpropertiesInfo(id));
        }
    };
}
