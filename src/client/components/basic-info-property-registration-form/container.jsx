import { countriesGet } from '../../logic/countries/actions'

export function mapStateToProps(state) {
    const { countries } = state;
    return {
        countries: countries.countries || [],
        initialValues: {
            userId: state.header.currentUser.id
        }
    }
}

export function mapDispatchToProps(dispatch) {
    return {
        getCountries() {
            dispatch(countriesGet())
        }
    }
}