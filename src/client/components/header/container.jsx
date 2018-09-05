import { getCurrencies, selectCurrency, logout } from 'client/logic/header/actions';

export function mapStateToProps(state , ownProps) {
    const {selectedCurrency,currencies,rate} = state.header
    return { ...state.header,
             ...selectedCurrency,
             ...currencies,
             ...rate
            };
}

export function mapDispatchToProps(dispatch, ownProps) {
    return {
        getCurrencies() {
            dispatch(getCurrencies());
        },

        onCurrencyChange(payload) {
            dispatch(selectCurrency(payload));
        },

        logout() {
            dispatch(logout());
        },

    };
}