import React, { Component } from "react";
import { connect } from 'react-redux';
import { Card, Button, Form, Icon, Container, Header } from "semantic-ui-react";
import renderField from "../input-form/renderField";
import {
  required, maxLength40, phoneNumber
} from "client/regexValidationService";
import { Field, reduxForm } from "redux-form";
import renderTextarea from "client/components/input-form/textarea";
import renderDropdown from "../input-form/dropdown";
import { mapDispatchToProps, mapStateToProps } from "./container";
import './index.scss';
import AlgoliaPlaces from "algolia-places-react";

class BasicInfoPropertyRegistrationForm extends Component {
  state = {};

  componentDidMount() {
    this.props.getCountries();
    this.props.getCurrencies();
    this.props.getPropertyTypes();
  }

  onCountryChange = (_, value) => {
    const { countries } = this.props;
    const country = countries.find(x => x.id == value);

    this.setState({
      selectedCountry: country
    });
  }

  renderAngolia = ({ input }) => {
    return (
      <AlgoliaPlaces
        name={input.name}
        options={{
          type: "address"
        }}
        value={input.value.fullAddress}
        onChange={({ suggestion }) => {
          input.onChange({
            fullAddress: `${suggestion.name}, ${suggestion.administrative}, ${suggestion.country}`,
            ...suggestion.latlng
          })
        }
        }
      />);
  }

  getCountries() {
    const { countries } = this.props;
    return countries.map(c => ({
      key: c.id,
      value: c.id,
      text: c.name
    }));
  }

  getCities() {
    const { selectedCountry } = this.state;

    let cityOptions = [];
    if (selectedCountry) {
      cityOptions = selectedCountry.cities.map(cc => ({
        key: cc.id,
        value: cc.id,
        text: cc.name
      }))
    }

    return cityOptions;
  }

  getCurrencies() {
    const { currencies } = this.props;
    return currencies.map(x => ({
      key: x.id,
      value: x.id,
      text: `${x.name}, ${x.code} (${x.number})`
    }))
  }

  getPropertyTypes() {
    const { propertyTypes } = this.props;
    return propertyTypes.map(x => ({
      key: x.id,
      value: x.id,
      text: x.name
    }))
  }

  render() {
    const {
      pristine, submitting, handleSubmit
    } = this.props;

    const countriesOptions = this.getCountries();
    const cityOptions = this.getCities();
    const currenciesOptions = this.getCurrencies();
    const propertyTypesOptions = this.getPropertyTypes();

    return (
      <div id="basicInfoPropertyRegistration">
        <Form onSubmit={handleSubmit} >
          <Container>
            <Header as='h2' style={{ fontSize: "18px" }}>
              What's the name of your property?
                        </Header>
            <div className="meta">
              Guests will see this name when they search for a place
              to stay.
            </div>

            <div className="wrapper">
              <label>Property name</label>
              <Field
                component={renderField}
                name="name"
                label="Property name"
                type="text"
                validate={[required, maxLength40]}
                icon="edit"
              />
            </div>

            <div className="wrapper">
              <label>Property description</label>
              <Field
                component={renderTextarea}
                name="description"
                label="Property description"
                validate={[required]}
              />
              <Icon disabled name='paperclip' className='texarea-icon' />
            </div>

            <div className="wrapper">
              <label>Property Type</label>
              <Field
                icon="home"
                style={{ borderRadius: "0px" }}
                component={renderDropdown}
                options={propertyTypesOptions || []}
                name="propertyTypeId"
                label="Property Type"
                validate={[required]}
              />
            </div>
          </Container>
          <Container>
            <Header as='h2' style={{ fontSize: "18px" }}>
              In what currency are all prices for Your property?
                        </Header>
            <div className="meta ">
              Guests will see price of rooms in this currency
                        </div>

            <div className="wrapper">
              <label>Prefered currency</label>
              <Field
                icon="dollar"
                style={{ borderRadius: "0px" }}
                component={renderDropdown}
                selection
                options={currenciesOptions}
                name="currencyId"
                label="Currency"
                validate={[required]}
              />
            </div>
          </Container>
          <Container style={{ width: "900px" }} color="teal">
            <Card.Content>
              <Header as='h2' style={{ fontSize: "18px" }}>
                What are the contact details for this property?
                            </Header>
              <div className="wrapper">
                <label>Contact name</label>
                <Field
                  component={renderField}
                  name="contactPersonName"
                  label="Contact name"
                  type="text"
                  icon="user"
                  validate={[required, maxLength40]}
                />
              </div>
              <div className="wrapper">
                <label>
                  Contact number(so we can assist with your registration
                 when needed)
                        </label>
                <Field
                  component={renderField}
                  name="contactPhone"
                  label="Contact number"
                  type="tel"
                  icon="phone"
                  validate={[required, phoneNumber]}
                />
              </div>
            </Card.Content>

          </Container>

          <Container style={{ width: "900px" }} color="teal">
            <Card.Content>
              <Header as='h2' style={{ fontSize: "18px" }}>
                Where's your property located?
                        </Header>
              <div className="wrapper">
                <label>
                  Street address
                        </label>
                <Field
                  component={this.renderAngolia}
                  name="address"
                  icon="map marker"
                  validate={[required]}
                />
              </div>
              <div className="wrapper">
                <label>
                  Address line 2
                            </label>
                <Field
                  component={renderField}
                  name="address1"
                  type="text"
                  label="For example: flat number and etc."
                  icon="map marker"
                  validate={[required, maxLength40]}

                />
              </div>
              <div className="wrapper">
                <label>
                  Country/Region
                            </label>

                <Field
                  icon="map pin"
                  style={{ borderRadius: "0px" }}
                  component={renderDropdown}
                  options={countriesOptions}
                  name="countryId"
                  label="Country"

                  onChange={this.onCountryChange}
                  validate={[required]}
                />
              </div>
              <div className="wrapper">
                <label>
                  City
                        </label>
                <Field
                  icon="map signs"
                  style={{ borderRadius: "0px" }}
                  component={renderDropdown}
                  selection
                  options={cityOptions || []}
                  name="cityId"
                  label="City"
                  id="city-dropdown"
                  validate={[required]}
                />
              </div>
            </Card.Content>
          </Container>

          <Container style={{ paddingTop: "0px" }}
          ><Button
            color="teal"
            fluid
            disabled={pristine || submitting}
            type="submit"
          >Continue</Button>
          </Container>
        </Form >

      </div>
    );
  }
}

const ReduxForm = reduxForm({
  form: 'propertyRegistrationForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(BasicInfoPropertyRegistrationForm);

export default connect(mapStateToProps, mapDispatchToProps)(ReduxForm);
