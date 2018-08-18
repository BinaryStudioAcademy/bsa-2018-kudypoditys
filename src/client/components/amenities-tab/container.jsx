import { amenitiesTabUpdate } from "client/logic/amenities-tab-for-property/actions";

export function mapStateToProps(state) {
    const { propertyAmenitiesTab } = state;
    return {
        ...propertyAmenitiesTab,
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        updateTab(data) {
            dispatch(amenitiesTabUpdate(data));
        }
    }
}