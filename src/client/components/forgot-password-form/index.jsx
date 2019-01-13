import React, { Component } from "react";
import history from "../../history";
import {
    Button, Form, Header, Container, Segment, Icon
} from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";

import { email, required } from "../../regexValidationService";
import renderField from "../../components/input-form/renderField";

class ForgotPasswordForm extends Component {
    render() {
        const {
            handleSubmit, pristine, submitting, loading
        } = this.props;

        return (
            <Container text className="registration-c-wrapper">
                <Header
                    textAlign="center"
                    style={{
                        cursor: "default",
                        color: "white",
                        fontSize: "26px"
                    }}
                >
                    Forgot password
                </Header>
                <Segment className="forgot_form-wrapper" padded='very' raised>
                    <Form onSubmit={handleSubmit} loading={loading} id="forgot-password-form">
                        <div className="field-wrapper">
                            <Field
                                style={{ marginTop: "5%" }}
                                name="email"
                                type="email"
                                component={renderField}
                                label="Email"
                                validate={[required, email]}
                                icon="mail"
                                iconPosition="left"
                                pointing="left"
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
                                type="submit"
                                disabled={submitting || pristine}
                                icon
                                color='blue'
                                labelPosition='right'>
                                Send Email
                                <Icon name='send' />
                            </Button>
                        </div>
                    </Form>
                </Segment>
            </Container>
        );
    }
}

export default reduxForm({ form: 'forgotPassword' })(ForgotPasswordForm);