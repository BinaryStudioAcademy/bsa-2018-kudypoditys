import {
    updateUserSettings,
    sendUserSettings,
    getUserSettings,
    uploadAvatar,
    resetPassword,
    avatarDelete
} from "client/logic/user-cabinet-settings/actions";

export function mapStateToProps(state) {
    const { userSettings } = state;
    return {
        ...userSettings
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
        resetPassword(mail) {
            dispatch(resetPassword(mail));
        },
        avatarDelete() {
            dispatch(avatarDelete());
        }
    };
}
