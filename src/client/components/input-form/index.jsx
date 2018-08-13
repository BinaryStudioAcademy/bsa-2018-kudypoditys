import React from 'react';
import { reduxForm ,Field} from 'redux-form';
import { Input} from 'semantic-ui-react';


const validate = values => {
    const errors = {}
    if (!values.customName) {
        errors.customName = 'Required'
    } else if (values.customName.length > 15) {
        errors.customName = 'Must be 15 characters or less'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.propetyName) {
        errors.propetyName = 'Required'
    } else if (values.propetyName.length > 25) {
        errors.propetyName = 'Must be 25 characters or less'
    }
    if (!values.phoneNumber) {
        errors.phoneNumber = 'Required'
    } else if (!/^(0|[1-9][0-9]{9})$/i.test(values.phoneNumber)) {
        errors.phoneNumber = 'Invalid phone number, must be 10 digits'

        return errors
    }
}
const warn = values => {
    const warnings = {}
    if (values.propertyname > 20) {
        warnings.age = 'Hmm, perhaps a shorter name will be more attractive.'
    }
    return warnings
}

const renderField = ({ input, type, label, meta: { touched, error, warning } }) => (
    <React.Fragment>
        <label> {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}</label>
        <Input
            {...input}
            type={type}
            placeholder={label}
        />
    </React.Fragment>
)
const InputForm = (props) => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
        <Field
        component={renderField}
        name="property name"
        type="PropertyName"
        label="Name"
        placeholder="Property Name"
        required="required"
        className="form-control"

      />
        </form>
    )

};

export default reduxForm({
    form: 'InputForm',
    validate,
    warn
})(InputForm)