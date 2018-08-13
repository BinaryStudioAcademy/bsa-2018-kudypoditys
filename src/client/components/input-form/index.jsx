import React from 'react';
import { reduxForm ,Field} from 'redux-form';
import { Input, Label} from 'semantic-ui-react';

const required = value => (value || typeof value === 'number' ? undefined : 'Required')

const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined

const maxLength20 = maxLength(20)

const minLength = min => value =>

  value && value.length < min ? `Must be ${min} characters or more` : undefined
const minLength2 = minLength(2)

const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined

 const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined

const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined

const aol = value =>
  value && /.+@aol\.com/.test(value)
    ? 'Really? You still use AOL for your email?'
    : undefined

const renderField = ({ input, type, label,  className, meta: { touched, error, warning } }) => (
    <React.Fragment>
       <Label basic className={touched && error ? 'shown' : 'hidden'} color='red' pointing='below'>
            {touched && error ? error : ''}
        </Label>
        <Input
            {...input}
            type={type}
            placeholder={label}
            fluid
            className={className}
        />
    </React.Fragment>
)
const InputForm = (props) => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
      <Field
       name="phone"
       type="number"
       component={renderField}
       label="Phone number"
       validate={[required, phoneNumber]}
      />
        </form>
    )

};

export default reduxForm({
    form: 'InputForm'
})(InputForm)