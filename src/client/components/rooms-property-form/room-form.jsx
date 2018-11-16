import React, { Component } from "react";
import { Button, Form, Icon, Checkbox } from "semantic-ui-react";
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
      <Form onSubmit={handleSubmit} id="roomRegistartion" >
        <div className="wrapper" style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="inner-wrapper">
            <label className="required">Price</label>
            <Field
              name={`price`}
              type="number"
              component={renderField}
              label="Price"
              validate={[required]}
              icon="money bill alternate outline"
            />
          </div>
          <div className="inner-wrapper">
            <label className="required">Amount</label>
            <Field
              name={`amount`}
              type="number"
              component={renderField}
              label="Amount"
              validate={[required]}
              icon="th"
            /></div>
          <div className="inner-wrapper">
            <label className="required">Area</label>
            <Field
              name={`area`}
              type="number"
              component={renderField}
              label="Area"
              validate={[required]}
              icon="expand arrows alternate"
            /></div>
        </div>
        <div className="wrapper">
          <label className="required">Description</label>
          <Field
            name={`description`}
            component={renderTextarea}
            label="Description"
            validate={[required]}
          />
          <Icon disabled name='paperclip' className='texarea-icon' />
        </div>

        <div className="wrapper">
          <label className="required">Select room type</label>
          <Field
            component={renderDropdown}
            options={roomTypesOptions}
            name={`roomType`}
            label="Room type"
            validate={[required]}
          />
        </div>
        <div className="wrapper">
            <Checkbox
                label="Breakfast included"
            />
        </div>
        <FieldArray
            name={`bedInRooms`}
            component={BedInRoomsFields}
            bedTypesOptions={bedTypesOptions}
            validate={[required]}
        />
        <Button floated='right' negative animated='vertical' type="button" onClick={handleCancel}>
          <Button.Content hidden>Cancel</Button.Content>
          <Button.Content visible>
            <Icon name="cancel" />
          </Button.Content>
        </Button>
        <Button floated='right' positive animated='vertical' type="submit">
          <Button.Content hidden>Save</Button.Content>
          <Button.Content visible>
            <Icon name="save outline icon" />
          </Button.Content>
        </Button>
      </Form >
    );
  }
}

export default reduxForm({
  form: 'roomForm'
})(RoomForm);
