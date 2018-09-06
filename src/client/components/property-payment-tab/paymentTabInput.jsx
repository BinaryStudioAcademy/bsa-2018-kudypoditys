import React from "react";
import { Input, Label } from "semantic-ui-react";

export const PaymentTabInput = ({ input, opts, label, val, type, pholder, meta: { touched, error } }) => {
    return (
        <div className="property_payment_tab-payment-input">
            { touched && error ?
                <Label color="red" pointing="below">
                    { error }
                </Label>
                :
                null
            }
            <Input
                {...input}
                {...opts}
                placeholder={pholder}
                type={type}
                value={val}
            />
        </div>
    )
};

export default PaymentTabInput;