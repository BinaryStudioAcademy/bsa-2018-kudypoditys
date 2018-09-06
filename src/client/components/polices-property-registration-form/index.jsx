import React, { Component } from 'react';
import { Card, Form, Button } from 'semantic-ui-react';
import { required } from 'client/regexValidationService';
import { Field, reduxForm } from 'redux-form';

import CheckInCheckOut from 'client/components/checkin-checkout';
import renderDropdown from 'client/components/input-form/dropdown';

import './index.scss';

class PolicesPropertyRegistrationForm extends Component {

  renderCancellationCard() {
    const cancelOptions = [
      {
        key: 1,
        value: 'true',
        text: 'Yes, my guests can cancel their booking for free'
      },
      {
        key: 2,
        value: 'false',
        text: 'No'
      },
    ];

    return (
      <Card style={{ width: '900px' }} color="teal">
        <Card.Content>
          <Card.Description style={{ fontSize: '18px' }}>
            Cancellations. Can your guests cancel their booking for free?
          </Card.Description>
          <br />
          <Field
            name="accommodationRule.cancelReservation"
            component={renderDropdown}
            icon="user cancel"
            options={cancelOptions}
            validate={[required]}
          />
        </Card.Content>
      </Card>
    );
  }

  renderCheckInCheckOutCard() {
    return (
      <Card style={{ width: '900px' }} color="teal">
        <Card.Content>
          <Field
            name="accommodationRule.checkInCheckOut"
            component={CheckInCheckOut}
          />
        </Card.Content>
      </Card>
    );
  }

  render() {
    const {
      pristine, submitting, handleSubmit
    } = this.props;

    return (
      <Form className="polices-property-registration-form" onSubmit={handleSubmit}>

        {this.renderCancellationCard()}

        {this.renderCheckInCheckOutCard()}

        <Button
          color="teal"
          fluid
          disabled={pristine || submitting}
          type="submit"
        >Continue</Button>
      </Form>
    );
  }
}

export default reduxForm({
  form: 'propertyRegistrationForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(PolicesPropertyRegistrationForm);
