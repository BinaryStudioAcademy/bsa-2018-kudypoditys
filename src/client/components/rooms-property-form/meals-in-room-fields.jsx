import React, { Component, Fragment } from "react";
import { Button, List, Divider, Icon, Grid, Label, GridColumn } from "semantic-ui-react";
import { required, positiveNumber } from "../../regexValidationService";
import { Field } from "redux-form";

import renderField from "../input-form/renderField";
import renderDropdown from "../input-form/dropdown";

class MealsInRoomFields extends Component {
  render() {
    const { fields, meta: { error }, mealOptions, mealTypesOptions } = this.props;
    return (
      <List divided relaxed>
        <List.Item>
          <Button type="button" onClick={() => fields.push()}>
            Add Meals
          </Button>
          {error ? <Label color='red' pointing="left">{error}</Label> : null}
        </List.Item>
        {fields.map((meal, index) => (
          <Fragment>
            <Grid columns={4} >
              <Grid.Row>
                <Grid.Column>
                  <label className="required">Meal</label>
                  <Field
                    component={renderDropdown}
                    options={mealOptions}
                    name={`${meal}.name`}
                    label="Meal"
                    validate={[required]}
                  />
                </Grid.Column>
                <Grid.Column>
                  <label className="required">Meal type</label>
                  <Field
                    component={renderDropdown}
                    options={mealTypesOptions}
                    name={`${meal}.type`}
                    label="Meal type"
                    validate={[required]}
                  />
                </Grid.Column>
                <GridColumn>
                    <label className="required">Price</label>
                    <Field
                        name={`${meal}.price`}
                        type="number"
                        component={renderField}
                        label="Price"
                        icon="dollar sign"
                        validate={[required, positiveNumber]}
                    />
                </GridColumn>
                <Grid.Column style={{ width: "12%", alignItems: 'center', display: 'flex' }}>
                  <Button
                    type="button"
                    title="Remove meal"
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

export default MealsInRoomFields;