import { countriesGet } from '../../../logic/countries/actions';
import { currenciesGet } from '../../../logic/currencies/actions';
import { propertyTypesGet } from '../../../logic/property-type/actions';

export function mapStateToProps(state) {
    const { countries, currencies, propertyTypes } = state;
    return {
        countries: countries.countries || [],
        currencies: currencies.currencies || [],
        propertyTypes: propertyTypes.propertyTypes || []
    }
}

export function mapDispatchToProps(dispatch) {
    return {
        getCountries() {
            dispatch(countriesGet())
        },
        getCurrencies() {
            dispatch(currenciesGet())
        },
        getPropertyTypes() {
            dispatch(propertyTypesGet())
        },
    }
}