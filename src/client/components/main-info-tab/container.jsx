import {propertySubmit} from "client/logic/main-info-tab/actions";


export function mapStateToProps(state) {
    const {propertyRegistrationTab} = state;
    return {
        ...propertyRegistrationTab
    }
}

export function mapDispatchToProps(dispatch) {
    return {
        createProperty(data) {
            console.log("mapDispatchToProps dispatch(propertySubmit(data)")
            console.log(data)
            dispatch(propertySubmit(data))
        }
    }
}
