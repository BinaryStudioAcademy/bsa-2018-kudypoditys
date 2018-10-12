import { propertyCreate } from 'client/logic/property-registration/actions'
import { facilitiesGet } from 'client/logic/facilities/actions';

export function mapStateToProps(state) {
    const { propertyRegistration, facilities, header } = state;
    return {
        ...propertyRegistration,
        facilities: facilities.facilities,
        user: header.currentUser
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