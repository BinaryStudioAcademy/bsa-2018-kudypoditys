import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../regexValidationService";
import PhotoDropZone from "../input-form/photo-drop-zone";
import '"../input-form/photo-drop-zone"';

class PhotoPropertyForm extends Component {
  render() {
    const {
      handleSubmit, pristine, submitting, isEdit
    } = this.props;

    return (
      <Form onSubmit={handleSubmit}>
        <div style={{ textAlign: "center" }}>
          <Field
            name="images"
            component={PhotoDropZone}
            validate={[required]}
          />
        </div>

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
})(PhotoPropertyForm);
