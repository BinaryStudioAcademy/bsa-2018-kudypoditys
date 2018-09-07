import React, { Component, Fragment } from "react";
import { Button, List, Divider } from "semantic-ui-react";
import { required } from 'client/regexValidationService';
import { Field } from 'redux-form';

import renderField from '../input-form/renderField';
import renderDropdown from '../input-form/dropdown';

class BedInRoomsFields extends Component {
  render() {
    const { fields, meta: { error }, bedTypesOptions } = this.props;

    return (
      <List divided relaxed>
        <List.Item>
          <Button type="button" onClick={() => fields.push()}>
            Add Bed
          </Button>
        </List.Item>
        {fields.map((bed, index) => (
          <Fragment>
            <List.Item key={index}>
              <Field
                component={renderDropdown}
                options={bedTypesOptions}
                name={`${bed}.bedType`}
                label="Bed Type"
                icon="bed"
                validate={[required]}
              />
              <Field
                name={`${bed}.count`}
                type="number"
                component={renderField}
                label="Total"
                validate={[required]}
              />
              <Button
                type="button"
                title="Remove Hobby"
                icon={'trash'}
                onClick={() => fields.remove(index)}
              />
            </List.Item>
            <Divider />
          </Fragment>
        ))}
        {error && <List.Item>{error}</List.Item>}
      </List>
    )
  }
}

export default BedInRoomsFields;