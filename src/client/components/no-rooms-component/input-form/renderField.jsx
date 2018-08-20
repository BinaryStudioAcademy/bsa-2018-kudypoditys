import React from "react";
import {Input, Label} from "semantic-ui-react";

const renderField = ({input, type, icon, label, className, pointing, meta: {touched, error}}) => (
    <React.Fragment>
        <Label basic className={touched && error ? 'shown' : 'hidden'} color='red' pointing={pointing || 'below'}>
            {touched && error ? error : ''}
        </Label>
        <Input
            {...input}
            type={type}
            placeholder={label}
            icon={icon}
            fluid
            iconPosition='left'
            className={className}
        />
    </React.Fragment>
);

export default renderField;