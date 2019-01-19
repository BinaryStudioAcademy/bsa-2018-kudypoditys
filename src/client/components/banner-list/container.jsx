import { searchUpdate, searchSubmit } from "../../logic/search/actions";
import { countriesGet } from "../../logic/countries/actions";

export function mapStateToProps(state) {
    const { cities, header, countries } = state;

    return {
        cities : cities.all.map(id =>cities.byId[id]),
        countries : countries.byId,
        currency: header.selectedCurrency };
}

export function mapDispatchToProps(dispatch, ownProps, data) {
    return {
        getCitiesWithCountries() {
            dispatch(countriesGet());
        },
        onSearch(data) {
            dispatch(searchUpdate({ query: data }));
            dispatch(searchSubmit(data));
        }
    };
}
