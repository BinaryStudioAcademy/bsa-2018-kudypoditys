import { selectCurrency, logout } from 'client/logic/header/actions';
import { currenciesGet } from 'client/logic/currencies/actions';
import { getCurrenciesRatio } from "../../logic/currencies-ratio/actions";

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
        },

        getCurrenciesRatio() {
            dispatch(getCurrenciesRatio());
        },
    };
}