import React from "react";
import {Input, Label} from "semantic-ui-react";

const FormTextInput = ({input, min,max,type, icon, label, autocomplete, className, meta: {touched, error}}) => (
    <React.Fragment>
        <Label basic className={touched && error ? 'shown' : 'hidden'} color='red' pointing='below'>
            {touched && error ? error : ''}
        </Label>
        <Input
            {...input}
            type={type}
            placeholder={label}
            icon={icon}
            fluid
            iconPosition='left'
            autoComplete={autocomplete}
            max={max}
            min={min}
        />
    </React.Fragment>
);

export default FormTextInput;