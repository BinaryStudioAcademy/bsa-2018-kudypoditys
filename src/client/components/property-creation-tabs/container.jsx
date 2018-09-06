// import {propertySubmit} from "client/logic/property-creation-tabs/actions";
import {propertyUpdate} from "client/logic/property-creation-tabs/actions";
export function mapStateToProps(state) {
    const {activeIndex} = state.propertyRegistration;
    return {
        activeIndex
    };
    // const { propertyRegistration } = state;
    // return {
    //     ...propertyRegistration
    // }


}

export function mapDispatchToProps(dispatch) {
    return {
        updateTab(data) {
            dispatch(propertyUpdate(data));
        }
    }
}