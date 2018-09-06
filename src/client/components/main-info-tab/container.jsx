// import {propertySubmit} from "client/logic/main-info-tab/actions";
//
//
// export function mapStateToProps(state) {
//     const {propertyRegistrationTab} = state;
//     return {
//         ...propertyRegistrationTab
//     }
// }
//
// export function mapDispatchToProps(dispatch) {
//     return {
//         createProperty(data) {
//             dispatch(propertySubmit(data))
//         }
//     }
// }
import {propertyUpdate} from 'client/logic/property-creation-tabs/actions';


export function mapStateToProps(state) {
    const {propertyRegistration} = state;
    return {
        ...propertyRegistration
    }
}

export function mapDispatchToProps(dispatch) {
    return {

        updateTab(data) {
            dispatch(propertyUpdate(data));
        }
    }
}