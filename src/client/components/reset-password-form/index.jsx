import React, { Component } from 'react';
import history from 'client/history';
import {
  Button, Form, Header, Segment, Container, Icon
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
      <Container text>
        <Header
          textAlign="center"
          style={{
            cursor: "default",
            color: "white",
            fontSize: "26px"
          }}
        >
          Reset Password
                </Header>
        <Segment className="registartion_form-wrapper" padded='very' raised >
          <Form onSubmit={handleSubmit} loading={loading} id="reset-password-form">
            <div className="field-wrapper">
              <Field
                style={{ marginTop: "5%" }}
                name="password"
                type="password"
                component={renderField}
                label="Password"
                validate={[required, password, minLength8]}
                icon="lock"
                pointing="left"
                iconPosition="left"
              />
            </div>
            <div className="field-wrapper">
              <Field
                style={{ marginTop: "5%" }}
                name="repeatPassword"
                type="password"
                component={renderField}
                label="Repeat password"
                validate={[required, isEqualToPassword]}
                icon="lock"
                pointing="left"
                iconPosition="left"
              />
            </div>
            <div className="btn-wrapper">
              <Button
                className="auth_btn"
                type="button"
                color='blue'
                icon
                labelPosition='left'
                onClick={() => history.push('/')}>
                <Icon name='left arrow' />
                Home</Button>
              <Button
                className="auth_btn"
                type="submit"
                name="register"
                disabled={submitting || pristine}
                icon
                color='blue'
                labelPosition='right'>
                Reset
                    <Icon name='right arrow' />
              </Button>


            </div>
          </Form>
        </Segment>
      </Container>
    );
  }
}

export default reduxForm({ form: 'resetPassword' })(ResetPasswordForm);