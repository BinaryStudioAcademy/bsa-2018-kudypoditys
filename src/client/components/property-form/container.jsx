import { propertyCreate } from '../../logic/property-registration/actions'
import { facilitiesGet } from '../../logic/facilities/actions';
import { propertyUpdate } from '../../logic/property-edit/actions';

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
        },
        updateProperty(data) {
            dispatch(propertyUpdate(data));
        }
    }
}