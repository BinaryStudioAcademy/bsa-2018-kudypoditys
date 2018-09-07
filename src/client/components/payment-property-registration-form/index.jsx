import React, { Component } from "react";
import {
  Button, Card, Form
} from "semantic-ui-react";
import { reduxForm, Field } from "redux-form";
import { required, maxLength255 } from "client/regexValidationService";

import renderDropdown from 'client/components/input-form/dropdown';
import renderTextarea from 'client/components/input-form/textarea';
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from './container';

class PaymentPropertyRegistrationForm extends Component {

  componentDidMount() {
    const { paymentTypes } = this.props;

    if (paymentTypes.length === 0) {
      this.props.getPaymentTypes();
    }
  }

  renderPaymentTypeCard() {
    const { paymentTypes } = this.props;

    const paymentOptions = paymentTypes.map((x, index) => ({
      key: index,
      value: { id: x.id, name: x.name },
      text: x.name
    }));

    return (
      <Card style={{ width: '900px' }} color="teal">
        <Card.Content>
          <Card.Description style={{ fontSize: '18px' }}>
            Payment. Ways of payment for guests
          </Card.Description>
          <br />
          <Field
            component={renderDropdown}
            options={paymentOptions}
            name="paymentTypes"
            label="Payment"
            icon="dollar"
            multiple
            validate={[required]}
          />
        </Card.Content>
      </Card>
    );
  }

  renderFeeCard() {

    const vatTaxesOptions = [
      {
        key: 1,
        value: 'null',
        text: 'None'
      },
      {
        key: 2,
        value: 'true',
        text: 'Includes'
      },
      {
        key: 3,
        value: 'false',
        text: 'Excludes'
      }
    ];

    return (
      <Card style={{ width: '900px' }} color="teal">
        <Card.Content>
          <Card.Description style={{ fontSize: '18px' }}>
            Fee. City tax and additional charges.
          </Card.Description>
          <br />
          <Field
            component={renderDropdown}
            options={vatTaxesOptions}
            name="vatIncluded"
            label="VAT"
            icon="dollar"
            validate={[required]}
          />
          <br />
          <Field
            component={renderTextarea}
            options={vatTaxesOptions}
            name="additionalFees"
            label="additional fees"
            icon="dollar"
            validate={[required, maxLength255]}
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
      <Form onSubmit={handleSubmit}>

        {this.renderPaymentTypeCard()}

        {this.renderFeeCard()}

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

const ReduxForm = reduxForm({
  form: 'propertyRegistrationForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(PaymentPropertyRegistrationForm);

export default connect(mapStateToProps, mapDispatchToProps)(ReduxForm);