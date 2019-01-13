import React from "react";
import { Input, Label } from "semantic-ui-react";

const inputField = ({input, type, icon, label, className, val, pointing, meta: {touched, error}}) => (
    <div className={className}>
        <Label basic className={touched && error ? 'shown' : 'hidden'} color='red' pointing={pointing || 'below'}>
            {touched && error ? error : ''}
        </Label>
        <Input
            {...input}
            type={type}
            placeholder={label}
            fluid
            value={val}
        />
    </div>
);

export default inputField;