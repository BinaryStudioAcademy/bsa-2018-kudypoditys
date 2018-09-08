import { countriesGet } from '../../logic/countries/actions';
import { currenciesGet } from 'client/logic/currencies/actions';

export function mapStateToProps(state) {
    const { countries, currencies } = state;
    return {
        countries: countries.countries || [],
        currencies: currencies.currencies || [],
        initialValues: {
            userId: state.header.currentUser.id
        }
    }
}

export function mapDispatchToProps(dispatch) {
    return {
        getCountries() {
            dispatch(countriesGet())
        },
        getCurrencies() {
            dispatch(currenciesGet())
        }
    }
}