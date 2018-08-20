import { paymentTabUpdate } from 'client/logic/property-payment-tab/actions';

export function mapStateToProps(state) {
    const { propertyPaymentTab } = state.propertyRegistration;
    return {
        ...propertyPaymentTab
    }
}

export function mapDispatchToProps(dispatch) {
    return {
        updateTab(data) {
            dispatch(paymentTabUpdate(data));
        }
    }
}