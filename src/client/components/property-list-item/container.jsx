export function mapStateToProps(state, ownProps) {
    const {header} = state;
    return {
        currency: header.selectedCurrency,
        allCurrencies: state.currencies.currencies,
    };
}