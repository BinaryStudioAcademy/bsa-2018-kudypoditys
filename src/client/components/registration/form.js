import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Icon, Message } from 'semantic-ui-react';
import 'client/components/registration/index.scss';
import validate from './validate';
import renderField from 'client/components/input-form/renderField';

const RegistrationForm = (props) => {
    const { submitting, registerFeedback } = props;
    return (
        <form onSubmit={props.handleSubmit}>
            {
                registerFeedback && registerFeedback.error ?
                    <Message negative>
                        <Message.Header>Oops!</Message.Header>
                        <p>{registerFeedback.message}</p>
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

            <Field
                component={renderField}
                name="email"
                type="email"
                icon="envelope"
                label="Email Address"
                required="required"
                className="registration-c-input"
                validate={[required, emailValidate]}
            />

            <Field
                component={renderField}
                name="phoneNumber"
                type="number"
                icon="phone"
                label="Phone"
                required="required"
                className="registration-c-input"
                validate={[required, phoneValidate]}
            />

            <Field
                component={renderField}
                name="password"
                type="password"
                icon="key"
                label="Password"
                required="required"
                className="registration-c-input"
                validate={[
                    required,
                    minLength(8),
                    maxLength(64),
                    passwordValidate
                ]}
            />

            <Button
                type="submit"
                className="registration-c-button"
                icon
                labelPosition="left"
                floated="right"
                color="blue"
                size="medium"
                basic
                name="register"
                disabled={submitting}
            >
                <Icon name="check" />
                Submit
            </Button>
        </form>
    );
};

export default reduxForm({
    form: "registration"
})(RegistrationForm);

// Validation

const required = value => {
    if (!value) {
        return "Is required.";
    }
};

export default reduxForm({
    form: 'registration',
    validate
})(RegistrationForm);

const emailValidate = value => {
    if (!value.match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)) {
        return "Invalid e-mail format.";
    }
};

const phoneValidate = value => {
    if (
        !value.match(
            /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
        )
    ) {
        return "Invalid phone number.";
    }
};

const passwordValidate = value => {
    if (!value.match(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z]))/)) {
        return "Password must contain at least one upperscore letter and one number.";
    }
};
