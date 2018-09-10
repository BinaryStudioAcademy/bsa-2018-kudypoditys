import {
    getUserpropertiesInfo,
    chooseProperty,
    unchooseProperty
} from "client/logic/user-cabinet-properties-tab/actions";

export function mapStateToProps(state) {
    const { userCabinetProperties, userCabinet } = state;
    return {
        ...userCabinetProperties,
        ...userCabinet
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        fetchUserInfo(id) {
            dispatch(getUserpropertiesInfo(id));
        },

        chooseProperty(property) {
            dispatch(chooseProperty(property));
        },

        unchooseProperty() {
            dispatch(unchooseProperty());
        }
    };
}
