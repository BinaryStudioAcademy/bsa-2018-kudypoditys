import {servicesTabUpdate} from "client/logic/property-services-tab/actions";


export function mapStateToProps(state) {
    const {propertyServicesTab} = state;
    return {
        ...propertyServicesTab,
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        updateTab(data) {
            dispatch(servicesTabUpdate(data));
        }
    }
}