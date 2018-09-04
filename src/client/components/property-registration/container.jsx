import { propertyCreate } from 'client/logic/property-registration/actions'
import { facilitiesGet } from 'client/logic/facilities/actions';

export function mapStateToProps(state) {
    const { propertyRegistration, facilities } = state;
    return {
        ...propertyRegistration,
        facilities: facilities.facilities
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        createProperty(data) {
            dispatch(propertyCreate(data));
        },
        getFacilities() {
            dispatch(facilitiesGet());
        }
    }
}