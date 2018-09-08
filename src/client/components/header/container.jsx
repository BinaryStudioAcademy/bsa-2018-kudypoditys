import { getCurrencies, selectCurrency, logout,changeUserCurrency } from 'client/logic/header/actions';
import {
    updateUserSettings,
    sendUserSettings,
} from "client/logic/user-cabinet-settings/actions";
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
        sendSettings(data) {
            dispatch(changeUserCurrency(data));
        },
        updateSettings(data) {
            dispatch(updateUserSettings(data));
        }
    };
}