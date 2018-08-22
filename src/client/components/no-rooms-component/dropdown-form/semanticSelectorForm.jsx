import React from 'react';
import {Form, Input} from 'semantic-ui-react';
export default function semanticSelectorFormField({input,name, type, label, placeholder, meta: {touched, error, warning}, as: As = Input, ...props}) {
    function handleChange(e, {value}){
        return input.onChange(value)
    }

    return (
        <Form.Field >
            <As {...props} {...input} value={input.value} type={type} label={label} placeholder={placeholder}
            onChange={(e,{value})=>handleChange(e,{value})}
            />
        </Form.Field>
    );
}