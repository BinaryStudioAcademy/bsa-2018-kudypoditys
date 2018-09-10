import React from "react";
import history from 'client/history';
import { Field, reduxForm } from "redux-form";
import {
    Button,
    Form,
    Icon,
    Grid,
    Segment,
    Message,
    Divider
} from "semantic-ui-react";
import renderField from "client/components/input-form/renderField";
import { required, email } from "client/regexValidationService";

let LoginForm = props => {
    const { handleSubmit, submitting, pristine } = props;
    return (
        <Segment className="login_form-wrapper" padded='very' raised>
            <Form onSubmit={handleSubmit} id="login-form">

                <div className="field-wrapper">
                    <Field
                        name="email"
                        type="email"
                        component={renderField}
                        label="Email"
                        validate={[required, email]}
                        icon="mail"
                        className="login-mail-input"
                        iconPosition="left"
                        pointing="left"
                    />
                </div>
                <div className="field-wrapper">
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
                        pointing="left"
                    />
                </div>
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
                        onClick={() => history.push('/forgotpassword')}
                    >
                        Forgot the password ?
                            </a>
                </Form.Field>
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
                        disabled={submitting || pristine}
                        icon
                        color='blue'
                        labelPosition='right'>
                        Login
                    <Icon name='right arrow' />
                    </Button></div>

            </Form>
        </Segment>
    );
};

LoginForm = reduxForm({
    form: "loginForm"
})(LoginForm);

export default LoginForm;
