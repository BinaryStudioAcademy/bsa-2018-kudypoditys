import { amenitiesTabUpdate } from "client/logic/amenities-tab-for-property/actions";

export function mapStateToProps(state) {
    const { propertyAmenitiesTab } = state;
    return {
        ...propertyAmenitiesTab,
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        onSubmit(data) {
            console.log("mapDispatchToProps dispatch( amenitiesTabUpdate(data)"+JSON.stringify(data))
            dispatch(amenitiesTabUpdate(data));
        }
    }
}