import React, { Component } from 'react';
import {
    Button, Form, Header, Grid, Segment
} from "semantic-ui-react";
import { Field, reduxForm } from 'redux-form';

import { email, required } from 'client/regexValidationService';
import renderField from 'client/components/input-form/renderField';

class ForgotPasswordForm extends Component {
    render() {
        const {
            handleSubmit, pristine, submitting, loading
        } = this.props;

        return (
            <Grid centered columns={3}>
                <Grid.Column textAlign="center">
                    <Header as="h1">Forgot password</Header>
                    <Form onSubmit={handleSubmit} loading={loading}>
                        <Segment stacked secondary>
                            <Field
                                style={{ marginTop: "5%" }}
                                name="email"
                                type="email"
                                component={renderField}
                                label="Email"
                                validate={[required, email]}
                                icon="mail"
                                iconPosition="left"
                            />
                            <Button positive type="submit" disabled={pristine || submitting}>Send Email</Button>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        );
    }
}

export default reduxForm({ form: 'forgotPassword' })(ForgotPasswordForm);