import {updateUserSettings, sendUserSettings} from "client/logic/personal-settings-edit/actions";


export function mapStateToProps(state) {
    const {userSettings} = state;
    return {
        ...userSettings
    }
}

export function mapDispatchToProps(dispatch) {
    return {
        sendSettings(data) {
            dispatch(sendUserSettings(data));
        },
        updateSettings(data) {
            dispatch(updateUserSettings(data));
        }
    }
}