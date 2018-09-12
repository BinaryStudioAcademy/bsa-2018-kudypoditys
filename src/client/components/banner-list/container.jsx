import { cityInfosGet } from 'client/logic/banner-list/actions';
import { searchUpdate, searchSubmit } from "client/logic/search/actions";

export function mapStateToProps(state) {
    const { cityInfos, header } = state;
    return { cityInfos, currency: header.selectedCurrency.code };
}

export function mapDispatchToProps(dispatch) {
    return {
        getCityInfos() {
            dispatch(cityInfosGet());
        },
        onSearch(data) {
            console.log("gone dispatch data: " + JSON.stringify(data))
            dispatch(searchUpdate({ query: data }));
            dispatch(searchSubmit(data));
        }
    }
}
