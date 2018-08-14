import React from 'react';
import { reduxForm } from 'redux-form';
import { required, phoneNumber } from './../../regexValidationService'
import './index.scss'
import { Input } from 'semantic-ui-react';

 export const FormTextInput = ({ input, max, min, label, type, required, autocomplete, meta: { touched, error } }) => {
    return (
    <div className="input">
        <input {...input}
            type={type}
            placeholder={label}
            required={required}
            autoComplete={autocomplete}
            max={max}
            min={min} />
        {touched &&
                error &&
                <span className='error'>
                    {error}
                </span>}
    </div>
)
}

const InputForm = (props) => {
    return (
        <Input
            name="phone"
            type="number"
            label="Phone number"
            validate={[required, phoneNumber]}
            component={FormTextInput}
            />

    )
};

export default reduxForm({
    form: 'InputForm'
})(InputForm)