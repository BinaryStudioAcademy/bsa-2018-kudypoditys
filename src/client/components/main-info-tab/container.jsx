import {propertyUpdate} from 'client/logic/property-creation-tabs/actions';


export function mapStateToProps(state) {
    const {propertyRegistration} = state;
    return {
        ...propertyRegistration
    }
}

export function mapDispatchToProps(dispatch) {
    return {

        updateTab(data) {
            dispatch(propertyUpdate(data));
        }
    }
}