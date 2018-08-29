// import {amenitiesTabUpdate} from "client/logic/amenities-tab-for-property/actions";
//
//
// export function mapStateToProps(state) {
//     const {propertyAmenitiesTab} = state;
//     return {
//         ...propertyAmenitiesTab,
//     };
// }
//
// export function mapDispatchToProps(dispatch) {
//     return {
//         onSubmit(data) {
//             dispatch(amenitiesTabUpdate(data));
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