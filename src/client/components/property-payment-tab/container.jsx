import { propertyUpdate } from 'client/logic/property-creation-tabs/actions';
import { propertySubmit } from 'client/logic/property-creation-tabs/actions';
export function mapStateToProps(state) {
    const { propertyRegistration } = state;
    const {userCabinet} = state
    return {
        ...propertyRegistration,
        ...userCabinet
    }
}

export function mapDispatchToProps(dispatch) {
    return {
        updateTab(data) {
            dispatch(propertyUpdate(data));
        },
        registerProperty(data) {
            dispatch(propertySubmit(data));
        }
    }
}