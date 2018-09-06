import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import { required } from 'client/regexValidationService';
import { Field, FieldArray, reduxForm } from 'redux-form';

import BedInRoomsFields from './bed-in-rooms-fields';

import renderField from '../input-form/renderField';
import renderTextarea from '../input-form/textarea';
import renderDropdown from '../input-form/dropdown';


class RoomForm extends Component {
  render() {
    const {
      handleSubmit, handleCancel, roomTypesOptions, bedTypesOptions
    } = this.props;

    return (
      <Form onSubmit={handleSubmit} >
        <Field
          name={`price`}
          type="number"
          component={renderField}
          label="Price"
          validate={[required]}
        />
        <Field
          name={`amount`}
          type="number"
          component={renderField}
          label="Amount"
          validate={[required]}
        />
        <Field
          name={`area`}
          type="number"
          component={renderField}
          label="Area"
          validate={[required]}
        />
        <Field
          name={`description`}
          component={renderTextarea}
          label="Description"
          validate={[required]}
        />
        <Field
          component={renderDropdown}
          options={roomTypesOptions}
          name={`roomType`}
          label="Room type"
          icon="home"
          validate={[required]}
        />
        <FieldArray name={`bedInRooms`} component={BedInRoomsFields} bedTypesOptions={bedTypesOptions} />
        <Button type="submit">Save</Button>

        <Button type="button" onClick={handleCancel}>Cancel</Button>
      </Form>
    );
  }
}

export default reduxForm({
  form: 'roomForm'
})(RoomForm);
