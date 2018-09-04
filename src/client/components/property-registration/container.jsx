import { propertyCreate } from 'client/logic/property-registration/actions'

export function mapStateToProps(state) {
    const { propertyRegistration } = state;
    return {
        ...propertyRegistration
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        createProperty(data) {
            dispatch(propertyCreate(data));
        }
    }
}