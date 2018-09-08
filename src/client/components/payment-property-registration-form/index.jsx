import React, { Component, Fragment } from "react";
import {
  Button, Card, Form,
  Container, Header, Icon
} from "semantic-ui-react";
import { reduxForm, Field } from "redux-form";
import { required, maxLength255 } from "client/regexValidationService";

import renderDropdown from 'client/components/input-form/dropdown';
import renderTextarea from 'client/components/input-form/textarea';
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from './container';
import './index.scss';

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
      <Fragment style={{ width: '900px' }} color="teal">
        <div className="wrapper">
          <Header as='h2' style={{ fontSize: "18px" }}>
            Payment. Ways of payment for guests
         </Header>
          <Field
            component={renderDropdown}
            options={paymentOptions}
            name="paymentTypes"
            label="Payment"
            // icon="disabled dollar"
            multiple
            validate={[required]}
          />
        </div>
      </Fragment>
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
      <Fragment style={{ width: '900px' }} color="teal">
        <Card.Content>
          <Header as='h2' style={{ fontSize: "18px" }}>
            Fee. City tax and additional charges.
         </Header>

          <Field
            component={renderDropdown}
            options={vatTaxesOptions}
            name="vatIncluded"
            label="VAT"
            icon="disabled dollar"
            validate={[required]}
          />

          <div className="wrapper">
            <label>Additional fees</label>
            <Field
              component={renderTextarea}
              options={vatTaxesOptions}
              name="additionalFees"
              label="Additional fees"
              icon="credit card outline"
              validate={[required, maxLength255]}
            />
            <Icon disabled name='credit card outline' className='texarea-icon' style={{ marginLeft: "0px" }} />
          </div>
        </Card.Content>
      </Fragment>
    );
  }

  render() {
    const {
      pristine, submitting, handleSubmit
    } = this.props;

    return (
      <Form onSubmit={handleSubmit} id="paymentPropertyRegistartionForm">
        <Container>
          {this.renderPaymentTypeCard()}
        </Container>
        <Container>
          {this.renderFeeCard()}
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

const ReduxForm = reduxForm({
  form: 'propertyRegistrationForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(PaymentPropertyRegistrationForm);

export default connect(mapStateToProps, mapDispatchToProps)(ReduxForm);