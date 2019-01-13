import { selectCurrency, logout } from "../../logic/header/actions";
import { currenciesGet } from "../../logic/currencies/actions";

export function mapStateToProps(state, ownProps) {
    const { currencies } = state;
    return {
        ...state.header,
        currencies: currencies.currencies || [],
    };
}

export function mapDispatchToProps(dispatch, ownProps) {
    return {
        getCurrencies() {
            dispatch(currenciesGet());
        },

        onCurrencyChange(payload) {
            dispatch(selectCurrency(payload));
        },

        logout() {
            dispatch(logout());
        }
    };
}