import {undefineSearchedData} from "client/logic/search/actions";


export function mapStateToProps(state, ownProps) {
    const {header} = state;
    return {
        currency: header.selectedCurrency,
        allCurrencies: state.currencies.currencies,
    };
}

export function mapDispatchToProps(dispatch, ownProps) {
    return {
        onRedirectOnDetails() {
            dispatch(undefineSearchedData());
        }
    };
}