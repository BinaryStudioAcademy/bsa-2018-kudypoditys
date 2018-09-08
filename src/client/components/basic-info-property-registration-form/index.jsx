import React, { Component } from "react";
import { connect } from 'react-redux';
import { Card, CardDescription, Button, Form, Icon, Container, Header, Divider } from "semantic-ui-react";
import renderField from "../input-form/renderField";
import {
    required, maxLength20, phoneNumber
} from "client/regexValidationService";
import { Field, reduxForm } from "redux-form";
import renderTextarea from "client/components/input-form/textarea";
import renderDropdown from "../input-form/dropdown";
import { mapDispatchToProps, mapStateToProps } from "./container";
import './index.scss';
import AlgoliaPlaces from "algolia-places-react";

class BasicInfoPropertyRegistrationForm extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        this.props.getCountries()
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
                {...input}
                options={{
                    type: "address"
                }}
                value={input.value.fullAddress}
                onChange={({ suggestion }) => {
                    input.onChange({
                        // fullAddress: `${suggestion.name} ${suggestion.administrative} ${suggestion.country}`,
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

    render() {
        const {
            pristine, submitting, handleSubmit, countries
        } = this.props;

        const countriesOptions = this.getCountries(countries);
        const cityOptions = this.getCities(countries);

        const style = `${<Icon name='paperclip' />} Property description`;

        return (
            <div id="basicInfoPropertyRegistration">
                <Form onSubmit={handleSubmit} >
                    <Container style={{ width: "900px" }} color="teal">
                        <Card.Content>
                            <Header as='h2' style={{ fontSize: "18px" }}>
                                What's the name of your property?
                        </Header>
                            <div className="meta ">
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
                                    validate={[required, maxLength20]}
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

                        </Card.Content>
                    </Container>
                    <div></div>
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
                                    validate={[required, maxLength20]}
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
                                // validate={[required]}
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
                                    validate={[required, maxLength20]}

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

                    <Field
                        style={{ height: "0px" }}
                        component={renderField}
                        name="userId"
                        type="hidden"
                    />

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
