import React from 'react';
import { reduxForm, Field } from 'redux-form';
import FormTextInput from './formTextInput';
import { required, phoneNumber } from './../../regexValidationService'



const InputForm = (props) => {
    return (
        < Field
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