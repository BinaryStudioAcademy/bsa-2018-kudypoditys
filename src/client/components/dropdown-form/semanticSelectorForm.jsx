import React from "react";
import PropTypes from "prop-types";
import {Form, Input} from "semantic-ui-react";
import "./index.scss";


export default function semanticSelectorFormField({input, type, label, placeholder, meta: {touched, error, warning}, as: As = Input, ...props}) {
    function handleChange(e, {value}) {
        return input.onChange(value);
    }

    return (
        <Form.Field>
            <As {...props} {...input} value={input.value} type={type} label={label} placeholder={placeholder}
                onChange={handleChange}/>

        </Form.Field>
    );
}

semanticSelectorFormField.propTypes = {
    as: PropTypes.any,
    input: PropTypes.object,
    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    meta: PropTypes.object
};

