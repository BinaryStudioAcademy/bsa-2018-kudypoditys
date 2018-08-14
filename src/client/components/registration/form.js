import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Input, Label, Icon, Message } from 'semantic-ui-react';
import 'client/components/registration/index.scss';

const renderField = ({input, type, icon, label, className, meta: {touched, error}}) => (
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
            className={className}
        />
    </React.Fragment>
);

const RegistrationForm = (props) => {
    const { submitting, registerFeedback } = props;
    return (
        <form onSubmit={props.handleSubmit}>
            {
                registerFeedback && registerFeedback.error ?
                <Message negative>
                    <Message.Header>Oops!</Message.Header>
                    <p>{ registerFeedback.message }</p>
                </Message> : null
            }
            <Field component={renderField}
                   name="fullName"
                   type="text"
                   icon="user"
                   label="Username"
                   required="required"
                   className="registration-c-input"
            />

            <Field component={renderField}
                   name="email"
                   type="email"
                   icon="envelope"
                   label="Email Address"
                   required="required"
                   className="registration-c-input"
            />

            <Field component={renderField}
                   name="phoneNumber"
                   type="number"
                   icon="phone"
                   label="Phone"
                   required="required"
                   className="registration-c-input"
            />

            <Field component={renderField}
                   name="password"
                   type="password"
                   icon="key"
                   label="Password"
                   required="required"
                   className="registration-c-input"
            />

            <Button
                type="submit"
                className='registration-c-button'
                icon
                labelPosition='left'
                floated='right'
                color='blue'
                size='medium'
                basic
                name='register'
                disabled={submitting}
            >
                <Icon name='check'/>
                Submit
            </Button>
        </form>
    );

};

const validate = values => {
    let errors = {};

    const { fullName, email, phoneNumber, password } = values;

    if(!fullName)
        errors.fullName = 'Name is required!';

    if(!email)
        errors.email = 'Email is required!';

    if(!phoneNumber)
        errors.phoneNumber = 'Phone is required!';

    if(!password)
        errors.password = 'Password is required!';

    //

    if(fullName && fullName.length < 2)
        errors.fullName = 'Name should be at least 2 characters long.';

    if(email && !email.match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/))
        errors.email = 'Incorrect e-mail format.';

    if(phoneNumber && !phoneNumber.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)) {
        errors.phoneNumber = 'Invalid phone number.';
    }

    if(password && password.length < 8) {
        errors.password = 'Password should be at least 8 characters long.'
    }

    if(password && !password.match(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z]))/)) {
        errors.password = 'Password should contain Uppercase & Downcase letters and at least 1 number.';
    }

    return errors;
};

export default reduxForm({
    form: 'registration',
    validate
})(RegistrationForm);


