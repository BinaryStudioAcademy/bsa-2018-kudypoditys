import React, { Component, Fragment } from 'react';
import { Form, Button, Container, Header } from 'semantic-ui-react';
import { required } from '../../../regexValidationService';
import { Field, reduxForm } from 'redux-form';

import CheckInCheckOut from './checkin-checkout';
import renderDropdown from '../../../components/input-form/dropdown';

import { cancelOptions } from './config';

import './index.scss';

class PolicesPropertyForm extends Component {

  renderCancellationCard() {

    return (
      <Fragment>
        <Header as="h2" style={{ fontSize: '18px' }} className="required">
          Cancellations. Can your guests cancel their booking for free?
          </Header>
        <br />
        <Field
          name="accommodationRule.cancelReservation"
          component={renderDropdown}
          icon="user cancel"
          options={cancelOptions}
          validate={[required]}
        />
      </Fragment>
    );
  }

  renderCheckInCheckOutCard() {
    const { initialValues, isEdit } = this.props;
    return (
      <Field
        name="accommodationRule.checkInCheckOut"
        checkInCheckOut={isEdit ? initialValues.accommodationRule.CheckInCheckOut : null}
        isEdit={isEdit}
        component={CheckInCheckOut}
        validate={[required]}
      />
    );
  }

  render() {
    const {
      pristine, submitting, handleSubmit, isEdit
    } = this.props;

    return (
      <Form id="policesPropertyRegistrationForm" onSubmit={handleSubmit}>
        <Container >
          {this.renderCancellationCard()}
        </Container>
        <Container >
          {this.renderCheckInCheckOutCard()}
        </Container>
        <Button
          color="teal"
          fluid
          disabled={!(isEdit || !pristine) || submitting}
          type="submit"
        >Continue</Button>
      </Form>
    );
  }
}

export default reduxForm({
  form: 'propertyForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(PolicesPropertyForm);
