export function mapStateToProps(state, ownProps) {
    const {header} = state;
    return {
        search: state.search,
        currency: header.selectedCurrency,
        allCurrencies: state.currencies.currencies,
    };
}