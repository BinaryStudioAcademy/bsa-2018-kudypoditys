import React, { Component, Fragment } from "react";
import {Button, List, Divider, Icon, Grid, Label} from "semantic-ui-react";
import { required } from "../../../regexValidationService";
import { Field } from "redux-form";

import renderField from "../../input-form/renderField";
import renderDropdown from "../../input-form/dropdown";

class BedInRoomsFields extends Component {
  render() {
    const { fields, meta: { error }, bedTypesOptions } = this.props;

    return (
      <List divided relaxed>
        <List.Item>
          <Button type="button" onClick={() => fields.push()}>
            Add Bed
          </Button>
          {error ? <Label color='red' pointing="left">{error}</Label> : null}
        </List.Item>
        {fields.map((bed, index) => (
          <Fragment>
            <Grid columns={3} >
              <Grid.Row>
                <Grid.Column>
                  <label className="required"> Select bed type</label>
                  <Field
                    component={renderDropdown}
                    options={bedTypesOptions}
                    name={`${bed}.bedType`}
                    label="Bed Type"
                    validate={[required]}
                  />
                </Grid.Column>
                <Grid.Column>
                  <label className="required"> Bed count</label>
                  <Field
                    name={`${bed}.count`}
                    type="number"
                    component={renderField}
                    label="Count"
                    validate={[required]}
                    icon="money bill alternate outline"
                  />
                </Grid.Column>
                <Grid.Column style={{ width: "12%", alignItems: 'center', display: 'flex' }}>
                  <Button
                    type="button"
                    title="Remove Hobby"
                    onClick={() => fields.remove(index)}
                    style={{ marginTop: '20px' }}
                  >
                    < Button.Content visible>
                      <Icon name="trash" />
                    </Button.Content>
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Divider />
          </Fragment>
        ))}
      </List>
    )
  }
}

export default BedInRoomsFields;