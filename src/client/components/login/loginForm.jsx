import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input, Button, Form, Header, Grid, Segment } from "semantic-ui-react";

const required = value => (value ? undefined : "Required");

const minValue = min => value =>
    value && value.length < min ? `Must be at least ${min}` : undefined;

const minValue8 = minValue(8);

const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? "Invalid email address"
        : undefined;

const renderField = ({
    input,
    label,
    type,
    icon,
    iconPosition,
    meta: { touched, error }
}) => (
    <Form.Field className={touched && error ? "error" : ""}>
        <Input
            {...input}
            placeholder={label}
            type={type}
            icon={icon}
            iconPosition={iconPosition}
            autoComplete="on"
        />
        {touched && (error && <span style={{ color: "red" }}>{error}</span>)}
    </Form.Field>
);

let LoginForm = props => {
    const { handleSubmit, handleRegisterClicked, handleForgotClicked } = props;
    return (
        <Grid centered columns={3}>
            <Grid.Column textAlign="center" >
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
                            iconPosition="left"
                        />
                        <Field
                            name="password"
                            type="password"
                            component={renderField}
                            label="Password"
                            validate={[required, minValue8]}
                            icon="lock"
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
