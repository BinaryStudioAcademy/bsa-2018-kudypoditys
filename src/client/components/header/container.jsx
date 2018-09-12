import { selectCurrency, logout, changeUserCurrency } from 'client/logic/header/actions';
import {
    updateUserSettings,
    sendUserSettings,
} from "client/logic/user-cabinet-settings/actions";
import { cityInfosGet } from 'client/logic/banner-list/actions';
import { currenciesGet } from 'client/logic/currencies/actions';

export function mapStateToProps(state, ownProps) {
    const { selectedCurrency, rate } = state.header
    const { currencies } = state;
    const { currentUser } = state
    return {
        ...state.header,
        ...selectedCurrency,
        ...rate,
        ...currentUser,
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
        sendSettings(data) {
            dispatch(changeUserCurrency(data));
        },
        updateSettings(data) {
            dispatch(updateUserSettings(data));
        },

        getCityInfos(data) {
            console.log('gone get city info')
            dispatch(cityInfosGet(data));
        }
    };
}