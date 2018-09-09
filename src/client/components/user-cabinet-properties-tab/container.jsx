import { getUserpropertiesInfo } from "client/logic/property-availability-calendar/actions";

export function mapStateToProps(state) {
    const { userCabinetProperties, userCabinet } = state;
    console.log("mapStateToProps", userCabinetProperties);
    return {
        ...userCabinetProperties,
        ...userCabinet
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        fetchUserInfo(id) {
            dispatch(getUserpropertiesInfo(id));
        }
    };
}
