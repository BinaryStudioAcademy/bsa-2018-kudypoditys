import React from "react";
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
    const { submitting, registerFeedback, handleLoginClicked } = props;
    return (
        <Segment stacked secondary style={{ marginBottom: "0px" }}>
            <form onSubmit={props.handleSubmit} className="registration-c-form">
                {registerFeedback && registerFeedback.error ? (
                    <Message negative>
                        <Message.Header>Oops!</Message.Header>
                        <p>{registerFeedback.message}</p>
                    </Message>
                ) : null}
                <Field
                    component={renderField}
                    name="fullName"
                    type="text"
                    icon="user"
                    label="Username"
                    required="required"
                    className="registration-c-input"
                    validate={[required, minLength2, maxLength20]}
                />

                <Field
                    component={renderField}
                    name="email"
                    type="email"
                    icon="envelope"
                    label="Email Address"
                    required="required"
                    className="registration-c-input"
                    validate={[required, email]}
                />

                <Field
                    component={renderField}
                    name="phoneNumber"
                    type="text"
                    icon="phone"
                    label="Phone (ex. 222444666888)"
                    required="required"
                    className="registration-c-input"
                    validate={[required, phoneNumber]}
                />

                <Field
                    component={renderField}
                    name="password"
                    type="password"
                    icon="key"
                    label="Password"
                    required="required"
                    className="registration-c-input"
                    validate={[required, password, minLength8]}
                />
                <Button.Group style={{ position: "relative", left: "28%" }}>
                    <Button
                        type="submit"
                        style={{
                            backgroundColor: "#465672"
                        }}
                        primary
                        name="register"
                        disabled={submitting}
                    >
                        Sign Up
                    </Button>
                    <Button.Or />
                    <Button
                        style={{ backgroundColor: "#465672" }}
                        primary
                        type="button"
                        onClick={handleLoginClicked}
                    >
                        Login
                    </Button>
                </Button.Group>
            </form>
        </Segment>
    );
};

export default reduxForm({
    form: "registration"
})(RegistrationForm);
