import {
    updateUserSettings,
    sendUserSettings,
    uploadAvatar,
    changePassword,
    avatarDelete
} from "../../../logic/user-cabinet-settings/actions";

import { currenciesGet } from '../../../logic/currencies/actions';

import { selectCurrency } from '../../../logic/header/actions';

export function mapStateToProps(state) {
    const { userSettings, currencies, header } = state;
    return {
        ...userSettings,
        currencies: currencies.currencies || [],
        selectedCurrency: header.selectedCurrency,
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        sendSettings(data) {
            dispatch(sendUserSettings(data));
        },
        updateSettings(data) {
            dispatch(updateUserSettings(data));
        },
        uploadAvatar(data) {
            dispatch(uploadAvatar(data));
        },
        changePassword(data) {
            dispatch(changePassword(data));
        },
        avatarDelete() {
            dispatch(avatarDelete());
        },
        getCurrencies() {
            dispatch(currenciesGet());
        },
        onCurrencyChange(payload) {
            dispatch(selectCurrency(payload));
        },
    };
}
