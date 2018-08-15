import {getCurrencies, getCurrentUser, selectCurrency} from 'client/logic/header/actions';

export function mapStateToProps(state, ownProps) {
    return {...state.header};
}

export function mapDispatchToProps(dispatch, ownProps) {
    return {
        getCurrencies() {
            dispatch(getCurrencies());
        },

        onCurrencyChange(payload) {
            dispatch(selectCurrency(payload));
        },

        getCurrentUser() {
            dispatch(getCurrentUser());
        }
    };
}