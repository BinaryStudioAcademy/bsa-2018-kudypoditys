import React from "react";
import { Field, reduxForm } from "redux-form";
import {
    Button,
    Form,
    Header,
    Grid,
    Segment,
    Message,
    Divider
} from "semantic-ui-react";
import renderField from "client/components/input-form/renderField";
import { required, email } from "client/regexValidationService";

let LoginForm = props => {
    const { handleSubmit, handleRegisterClicked, handleForgotClicked } = props;
    return (
        <Grid centered columns={3}>
            <Grid.Column textAlign="center">
                <Header as="h1" style={{ cursor: "default", color: "white" }}>
                    Log-in to your account
                </Header>
                <Form onSubmit={handleSubmit}>
                    <Segment style={{ padding: "25px" }} stacked secondary>
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
                        <Divider hidden style={{ margin: "3px" }} />
                        <Field
                            style={{ marginTop: "5%" }}
                            name="password"
                            type="password"
                            component={renderField}
                            label="Password"
                            validate={[required]}
                            icon="lock"
                            className="login-password-input"
                            iconPosition="left"
                        />
                        <Form.Field
                            style={{
                                textAlign: "right",
                                marginTop: "5px"
                            }}
                        >
                            <a
                                style={{
                                    color: "#465672",
                                    cursor: "pointer"
                                }}
                                tabIndex="0"
                                onClick={handleForgotClicked}
                            >
                                Forgot the password ?
                            </a>
                        </Form.Field>
                        <Button.Group>
                            <Button
                                style={{ backgroundColor: "#465672" }}
                                positive
                                type="submit"
                            >
                                Login
                            </Button>
                            <Button.Or />
                            <Button
                                style={{ backgroundColor: "#465672" }}
                                primary
                                type="button"
                                onClick={handleRegisterClicked}
                            >
                                Sign Up
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
