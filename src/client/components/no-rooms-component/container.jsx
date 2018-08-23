import {tabSubmit} from "client/logic/prices-tab/actions";


export function mapStateToProps(state) {
    const {propertRegistrationPricesTab} = state;
    return {
        ...propertRegistrationPricesTab
    }
}

export function mapDispatchToProps(dispatch) {
    return {
        submitTab(data) {
            dispatch(tabSubmit(data))
        }
    }
}
