import { getCurrencies, selectCurrency, logout,changeUserCurrency } from 'client/logic/header/actions';
import {
    updateUserSettings,
    sendUserSettings,
} from "client/logic/user-cabinet-settings/actions";
import { cityInfosGet } from 'client/logic/banner-list/actions';

export function mapStateToProps(state , ownProps) {
    const {selectedCurrency,currencies,rate} = state.header
    const {currentUser} = state
    return { ...state.header,
             ...selectedCurrency,
             ...currencies,
             ...rate,
             ...currentUser
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
        },
        getCityInfos(data) {
            console.log('gone get city info')
            dispatch(cityInfosGet(data));
        }
    };
}