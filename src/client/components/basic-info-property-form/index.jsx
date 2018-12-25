import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Button, Form, Icon, Container, Header } from "semantic-ui-react";
import renderField from "../input-form/renderField";
import {
    required,
    maxLength40,
    phoneNumber
} from "client/regexValidationService";
import { Field, reduxForm } from "redux-form";
import renderTextarea from "../input-form/textarea";
import renderDropdown from "../input-form/dropdown";
import { mapDispatchToProps, mapStateToProps } from "./container";
import "./index.scss";
import AlgoliaPlaces from "algolia-places-react";

class BasicInfoPropertyForm extends Component {
    state = {};

    componentDidMount() {
        this.props.getCountries();
        this.props.getCurrencies();
        this.props.getPropertyTypes();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.isEdit && this.props.initialValues) {
            if (!prevProps.initialValues || this.props.initialValues.id !== prevProps.initialValues.id) {
                this.onCountryChange(null, this.props.initialValues.countryId);
            }
        }
    }

    onCountryChange = (_, value) => {
        const { countries } = this.props;
        const country = countries.find(x => x.id == value);

        this.setState({
            selectedCountry: country
        });
    };

    renderAngolia = ({ input, className, meta: { touched, error } }) => {
        return (
            <AlgoliaPlaces
                name={input.name}
                options={{
                    type: "address"
                }}
                value={input.value.fullAddress}
                onChange={({ suggestion }) => {
                    input.onChange({
                        fullAddress: `${suggestion.name}, ${
                            suggestion.administrative
                            }, ${suggestion.country}`,
                        ...suggestion.latlng
                    });
                }}
                className={(touched && error)
                    ? (className !== undefined) ? `${className} field-error` : 'field-error'
                    : (className !== undefined) ? className : ''}
            />
        );
    };

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
            }));
        }

        return cityOptions;
    }

    getCurrencies() {
        const { currencies } = this.props;
        return currencies.map(x => ({
            key: x.id,
            value: x.id,
            text: `${x.name}, ${x.code} (${x.number})`
        }));
    }

    getPropertyTypes() {
        const { propertyTypes } = this.props;
        return propertyTypes.map(x => ({
            key: x.id,
            value: x.id,
            text: x.name
        }));
    }

    render() {
        const { pristine, submitting, handleSubmit, isEdit } = this.props;

        const countriesOptions = this.getCountries();
        const cityOptions = this.getCities();
        const currenciesOptions = this.getCurrencies();
        const propertyTypesOptions = this.getPropertyTypes();

        return (
            <div id="basicInfoPropertyRegistration">
                <Form onSubmit={handleSubmit}>
                    <Container>
                        <Header as="h2" style={{ fontSize: "18px" }}>
                            What's the name of your property?
                        </Header>
                        <div className="meta">
                            Guests will see this name when they search for a
                            place to stay.
                        </div>

                        <div className="wrapper">
                            <label className="required">Property name</label>
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
                            <label className="required">
                                Property description
                            </label>
                            <Field
                                component={renderTextarea}
                                name="description"
                                label="Property description"
                                validate={[required]}
                            />
                            <Icon
                                disabled
                                name="paperclip"
                                className="texarea-icon"
                            />
                        </div>

                        <div className="wrapper">
                            <label className="required">Property Type</label>
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
                        <Header as="h2" style={{ fontSize: "18px" }}>
                            In what currency are all prices for Your property?
                        </Header>
                        <div className="meta ">
                            Guests will see price of rooms in this currency
                        </div>

                        <div className="wrapper">
                            <label className="required">
                                Prefered currency
                            </label>
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
                            <Header as="h2" style={{ fontSize: "18px" }}>
                                What are the contact details for this property?
                            </Header>
                            <div className="wrapper">
                                <label className="required">Contact name</label>
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
                                <label className="required">
                                    Contact number(so we can assist with your
                                    registration when needed)
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
                            <Header as="h2" style={{ fontSize: "18px" }}>
                                Where's your property located?
                            </Header>
                            <div className="wrapper">
                                <label className="required">
                                    Street address
                                </label>
                                <Field
                                    component={this.renderAngolia}
                                    name="address"
                                    icon="map marker"
                                    validate={[required]}
                                    ref={(input) => { this.addressInput = input }}
                                />
                            </div>
                            <div className="wrapper">
                                <label>Address line 2</label>
                                <Field
                                    component={renderField}
                                    name="address1"
                                    type="text"
                                    label="For example: flat number and etc."
                                    icon="map marker"
                                    validate={[maxLength40]}
                                />
                            </div>
                            <div className="wrapper">
                                <label className="required">
                                    Country/Region
                                </label>

                                <Field
                                    icon="map"
                                    style={{ borderRadius: "0px" }}
                                    component={renderDropdown}
                                    options={countriesOptions}
                                    name="countryId"
                                    label="Country"
                                    onChange={this.onCountryChange}
                                    validate={[required]}
                                />
                            </div>
                            {this.state.selectedCountry ?
                            (<div>
                            <div className="wrapper">
                                <label className="required">City</label>
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
                            <div className="wrapper">
                                <label className="required">
                                    Distance to center
                                </label>
                                <Field
                                    name={`distanceToCentre`}
                                    min={0}
                                    max={20}
                                    type="number"
                                    component={renderField}
                                    label="Distance in km"
                                    validate={[required]}
                                    icon="map pin"
                                                />
                                </div>
                                <div className="wrapper">
                                    <label>
                                        Info about nearest metro station
                                    </label>
                                    <div className="wrapper" style={{ display: "flex" , justifyContent: "space-between" }}>     
                                        <Field
                                            name={`nearestMetro`}
                                            type="text"
                                            className="metro"
                                            component={renderField}
                                            label="Metro name"
                                            validate={[required]}
                                            icon="train"
                                                />
                                        <Field
                                            name={`distanceToMetro`}
                                            type="number"
                                            className="metro"
                                            component={renderField}
                                            label="Distance within 1 km in metres"
                                            validate={[required]}
                                            icon="location arrow"
                                                />
                                    </div>
                                </div>
                            </div>) : null}
                        </Card.Content>
                    </Container>

                    <Container style={{ paddingTop: "0px" }}>
                        <Button
                            color="teal"
                            fluid
                            disabled={!(isEdit || !pristine) || submitting}
                            type="submit"
                        >
                            Continue
                        </Button>
                    </Container>
                </Form>
            </div>
        );
    }
}

const ReduxForm = reduxForm({
    form: "propertyForm",
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    enableReinitialize: true
})(BasicInfoPropertyForm);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxForm);
