import { cityInfosGet } from 'client/logic/banner-list/actions';
import { searchUpdate, searchSubmit } from "client/logic/search/actions";

export function mapStateToProps(state) {
    const { cityInfos, header } = state;
    return { cityInfos, currency: header.selectedCurrency };
}

export function mapDispatchToProps(dispatch, ownProps, data) {
    return {
        getCityInfos() {
            dispatch(cityInfosGet());
        },
        onSearch(data) {
            dispatch(searchUpdate({ query: data }));
            dispatch(searchSubmit(data));
        }
    };
}
