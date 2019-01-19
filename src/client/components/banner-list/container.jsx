import { citiesGet } from '../../logic/cities/actions';
import { searchUpdate, searchSubmit } from "../../logic/search/actions";
import { countriesGet } from "../../logic/countries/actions";

export function mapStateToProps(state) {
    const { cities, header, countries } = state;

    return {
        cities : cities.all.map(id =>
            {
                const city = cities.byId[id];
                return {...city, flagUrl : countries.byId[city.countryId].flagUrl || ''};
            }),
        currency: header.selectedCurrency.code };
}

export function mapDispatchToProps(dispatch, ownProps, data) {
    return {
        getCities() {
            dispatch(citiesGet());
            dispatch(countriesGet());
        },
        onSearch(data) {
            dispatch(searchUpdate({ query: data }));
            dispatch(searchSubmit(data));
        }
    };
}
