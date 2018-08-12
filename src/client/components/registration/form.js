import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Button, Input, Label, Icon} from 'semantic-ui-react';
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
    const {submitting} = props;
    return (
        <form onSubmit={props.handleSubmit}>

            <Field component={renderField}
                   name="fullname"
                   type="text"
                   icon="user"
                   label="Username"
                   required="required"
                   className="registration-c-input"
                   validate={[required, minLength(2), maxLength(32), fullnameValidate]}
            />

            <Field component={renderField}
                   name="email"
                   type="email"
                   icon="envelope"
                   label="Email Address"
                   required="required"
                   className="registration-c-input"
                   validate={[required, emailValidate]}
            />

            <Field component={renderField}
                   name="phone"
                   type="number"
                   icon="phone"
                   label="Phone"
                   required="required"
                   className="registration-c-input"
                   validate={[required, phoneValidate]}
            />

            <Field component={renderField}
                   name="password"
                   type="password"
                   icon="key"
                   label="Password"
                   required="required"
                   className="registration-c-input"
                   validate={[required, minLength(8), maxLength(64), passwordValidate]}
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

export default reduxForm({
    form: 'registration'
})(RegistrationForm);


// Validation

const required = value => {
    if (!value) {
        return 'Is required.';
    }
};

const minLength = min => value => {
    if (value.length < min) {
        return `Must be at least ${min} characters long.`;
    }
};

const maxLength = max => value => {
    if (value.length > max) {
        return `It's too long.`;
    }
};

const fullnameValidate = value => {
    if (!value.match(/^[a-z ,.'-]+$/i)) {
        return 'Incorrect name format.';
    }
};

const emailValidate = value => {
    if (!value.match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)) {
        return 'Invalid e-mail format.';
    }
};

const phoneValidate = value => {
    if (!value.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)) {
        return 'Invalid phone number.';
    }
};

const passwordValidate = value => {
    if (!value.match(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z]))/)) {
        return 'Password must contain at least one upperscore letter and one number.';
    }
};

