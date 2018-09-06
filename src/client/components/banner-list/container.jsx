import { cityInfosGet } from 'client/logic/banner-list/actions';
import { searchUpdate,searchSubmit } from "client/logic/search/actions";

export function mapStateToProps(state, ownProps) {
    const { cityInfos } = state;
    const { rate, currency } = state.header;
    console.log(cityInfos)
    return { cityInfos , rate, currency};
}

export function mapDispatchToProps(dispatch, ownProps,data) {
    return {
        getCityInfos() {
            console.log('gone get city info')
            dispatch(cityInfosGet());
        },
        onSearch(data) {
            console.log("gone dispatch data: "+JSON.stringify(data))
            dispatch(searchUpdate({ query: data }));
            dispatch(searchSubmit(data));
        }
    }
}
