import { Input, Label } from "semantic-ui-react";
import React from "react";

export const InputPrice = ({ input, label, classname, type, pholder, val, _onChange, value, meta: { touched, error } }) => {
    return (
        <div className={classname}>
            { touched && error ?
                <Label color="red" pointing="below">
                    { error }
                </Label>
                : null
            }
            <Input
                {...input}
                type={type}
                label={label}
                placeholder={pholder}
                value={val}
            />
        </div>
    )
};

export default InputPrice;