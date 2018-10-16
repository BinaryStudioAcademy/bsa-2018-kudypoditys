import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';

import PhotoDropZone from '../input-form/photo-drop-zone';
import './index.scss'

class PhotoPropertyForm extends Component {
  render() {
    const {
      handleSubmit, pristine, submitting
    } = this.props;

    return (
      <Form onSubmit={handleSubmit}>
        <div style={{ textAlign: "center" }}>
          <Field
            name="images"
            component={PhotoDropZone}
          />
        </div>

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
  form: 'propertyForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(PhotoPropertyForm);
