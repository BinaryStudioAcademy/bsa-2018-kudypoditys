import { propertyUpdate } from 'client/logic/property-creation-tabs/actions';
import { countriesGet } from '../../logic/countries/actions'


export function mapStateToProps(state) {
    const { propertyRegistration, countries } = state;
    return {
        ...propertyRegistration,
        countries: countries.countries || [],
        initialValues: { userId: state.header.currentUser.id }
    }
}

export function mapDispatchToProps(dispatch) {
    return {
        getCountries() {
            dispatch(countriesGet())
        },

        updateTab(data) {
            dispatch(propertyUpdate(data));
        }
    }
}