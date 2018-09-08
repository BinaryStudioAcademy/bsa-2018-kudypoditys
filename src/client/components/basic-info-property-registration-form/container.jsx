import { countriesGet } from 'client/logic/countries/actions';
import { currenciesGet } from 'client/logic/currencies/actions';
import { propertyTypesGet } from 'client/logic/property-type/actions';

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