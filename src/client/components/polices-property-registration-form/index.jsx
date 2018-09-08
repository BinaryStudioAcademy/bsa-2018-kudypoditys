import React, { Component, Fragment } from 'react';
import { Form, Button, Container, Card } from 'semantic-ui-react';
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
        text: 'No, my guests will look the booking fee if they cancel'
      },
    ];

    return (
      <Fragment>
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
      </Fragment>
    );
  }

  renderCheckInCheckOutCard() {
    return (
      <Fragment>
        <Card.Content>
          <Field
            name="accommodationRule.checkInCheckOut"
            component={CheckInCheckOut}
          />
        </Card.Content>
      </Fragment>
    );
  }

  render() {
    const {
      pristine, submitting, handleSubmit
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
