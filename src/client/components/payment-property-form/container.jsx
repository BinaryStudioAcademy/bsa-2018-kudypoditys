import { paymentTypesGet } from 'client/logic/payment-type/actions';

export const mapStateToProps = (state) => {
    const { paymentTypes } = state;
    return {
        paymentTypes: paymentTypes.paymentTypes || []
    }
};

export const mapDispatchToProps = (dispatch) => {
    return {
        getPaymentTypes() {
            dispatch(paymentTypesGet())
        }
    }
}
