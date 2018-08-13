import React from 'react';
import { reduxForm, Field } from 'redux-form';
import renderField from './inputForm';
import { required, phoneNumber } from './../../regexValidationService'



const InputForm = (props) => {
    return (
        < Field
            name="phone"
            type="number"
            label="Phone number"
            validate={[required, phoneNumber]}
            component={renderField}
        />
    )
};

export default reduxForm({
    form: 'InputForm'
})(InputForm)