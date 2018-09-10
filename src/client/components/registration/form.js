import React from "react";
import history from 'client/history';
import { Field, reduxForm } from "redux-form";
import { Button, Icon, Message, Segment } from "semantic-ui-react";
import "client/components/registration/index.scss";
import renderField from "client/components/input-form/renderField";
import {
    required,
    minLength2,
    minLength8,
    maxLength20,
    email,
    phoneNumber,
    password
} from "client/regexValidationService";

const RegistrationForm = props => {
    const { submitting, registerFeedback } = props;
    return (
        <Segment className="registartion_form-wrapper" padded='very' raised >
            <form onSubmit={props.handleSubmit} id="registration-form">
                {registerFeedback && registerFeedback.error ? (
                    <Message negative>
                        <Message.Header>Oops!</Message.Header>
                        <p>{registerFeedback.message}</p>
                    </Message>
                ) : null}
                <div className="field-wrapper">
                    <Field
                        component={renderField}
                        name="fullName"
                        type="text"
                        icon="user"
                        label="Username"
                        required="required"
                        className="registration-c-input"
                        validate={[required, minLength2, maxLength20]}
                        pointing={'left'}
                    />
                </div>

                <div className="field-wrapper">
                    <Field
                        component={renderField}
                        name="email"
                        type="email"
                        icon="envelope"
                        label="Email Address"
                        required="required"
                        className="registration-c-input"
                        validate={[required, email]}
                        pointing={'left'}
                    />
                </div>

                <div className="field-wrapper">
                    <Field
                        component={renderField}
                        name="phoneNumber"
                        type="text"
                        icon="phone"
                        label="Phone (ex. 222444666888)"
                        required="required"
                        className="registration-c-input "
                        validate={[required, phoneNumber]}
                        pointing={'left'}
                    />
                </div>
                <div className="field-wrapper">
                    <Field
                        component={renderField}
                        name="password"
                        type="password"
                        icon="key"
                        label="Password"
                        required="required"
                        className="registration-c-input"
                        validate={[required, password, minLength8]}
                        pointing={'left'}
                    />
                </div>
                <div className="btn-wrapper">
                    <Button
                        className="auth_btn"
                        type="button"
                        color='blue'
                        icon
                        labelPosition='left'
                        onClick={() => history.goBack()}>
                        <Icon name='left arrow' />
                        Back</Button>
                    <Button
                        className="auth_btn"
                        type="submit"
                        name="register"
                        disabled={submitting}
                        icon
                        color='blue'
                        labelPosition='right'>
                        Sign Up
                    <Icon name='right arrow' />
                    </Button>


                </div>
            </form>
        </Segment >
    );
};

export default reduxForm({
    form: "registration"
})(RegistrationForm);
