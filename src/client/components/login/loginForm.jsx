import React from "react";
import { Field, reduxForm } from "redux-form";
import {Button, Form, Header, Grid, Segment} from "semantic-ui-react";
import renderField from "client/components/input-form/renderField";
import {
    required,
    email,
    password,
    minLength8
} from "client/regexValidationService";

let LoginForm = props => {
    const { handleSubmit, handleRegisterClicked, handleForgotClicked } = props;
    return (
        <Grid centered columns={3}>
            <Grid.Column textAlign="center">
                <Header as="h1">Log-in to your account</Header>
                <Form onSubmit={handleSubmit}>
                    <Segment stacked secondary>
                        <Field
                            name="email"
                            type="email"
                            component={renderField}
                            label="Email"
                            validate={[required, email]}
                            icon="mail"
                            className="login-mail-input"
                            iconPosition="left"
                        />
                        <Field
                            style={{marginTop: "4%"}}
                            name="password"
                            type="password"
                            component={renderField}
                            label="Password"
                            validate={[required, password, minLength8]}
                            icon="lock"
                            className="login-password-input"
                            iconPosition="left"
                        />
                        <Form.Field style={{ textAlign: "right" }}>
                            <a tabIndex="0" onClick={handleForgotClicked}>
                                Forgot the password ?
                            </a>
                        </Form.Field>
                        <Button.Group>
                            <Button positive type="submit">
                                Login
                            </Button>
                            <Button.Or />
                            <Button
                                primary
                                type="button"
                                onClick={handleRegisterClicked}
                            >
                                Register
                            </Button>
                        </Button.Group>
                    </Segment>
                </Form>
            </Grid.Column>
        </Grid>
    );
};

LoginForm = reduxForm({
    form: "loginForm"
})(LoginForm);

export default LoginForm;
