import { getCurrencies, selectCurrency, logout } from 'client/logic/header/actions';

export function mapStateToProps(state, ownProps) {
    return { ...state.header };
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
        }
    };
}