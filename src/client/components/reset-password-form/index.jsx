import React, { Component } from 'react';
import {
  Button, Form, Header, Grid, Segment
} from "semantic-ui-react";
import { Field, reduxForm } from 'redux-form';

import { isEqualToFields, required, password, minLength8 } from 'client/regexValidationService';
import renderField from 'client/components/input-form/renderField';

const isEqualToPassword = isEqualToFields('password');

class ResetPasswordForm extends Component {
  render() {
    const {
      handleSubmit, pristine, submitting, loading
    } = this.props;

    return (
      <Grid centered columns={3}>
        <Grid.Column textAlign="center">
          <Header as="h1">Reset password</Header>
          <Form onSubmit={handleSubmit} loading={loading}>
            <Segment stacked secondary>
              <Field
                style={{ marginTop: "5%" }}
                name="password"
                type="password"
                component={renderField}
                label="Password"
                validate={[required, password, minLength8]}
                icon="lock"
                className=""
                iconPosition="left"
              />
              <Field
                style={{ marginTop: "5%" }}
                name="repeatPassword"
                type="password"
                component={renderField}
                label="Repeat password"
                validate={[required, isEqualToPassword]}
                icon="lock"
                className=""
                iconPosition="left"
              />
              <Button positive type="submit" disabled={pristine || submitting}>Reset</Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

export default reduxForm({ form: 'resetPassword' })(ResetPasswordForm);