import React, { Component } from "react";
import { connect } from 'react-redux';
import { Card, CardDescription, Button, Form } from "semantic-ui-react";
import renderField from "../input-form/renderField";
import {
    required, maxLength20, phoneNumber
} from "client/regexValidationService";
import { Field, reduxForm } from "redux-form";
import renderTextarea from "client/components/input-form/textarea";
import renderDropdown from "../input-form/dropdown";
import { mapDispatchToProps, mapStateToProps } from "./container";

class BasicInfoPropertyRegistrationForm extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        this.props.getCountries()
    }

    onCountryChange = (e, value) => {
        const { countries } = this.props;
        const country = countries.find(x => x.id == value);

        this.setState({
            selectedCountry: country
        });
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

        return (
            <Form onSubmit={handleSubmit}>
                <Card style={{ width: "900px" }} color="teal">
                    <Card.Content>
                        <Card.Description style={{ fontSize: "18px" }}>
                            What's the name of your property?
                        </Card.Description>
                        <br />
                        <Field
                            component={renderField}
                            name="name"
                            label="Property name"
                            type="text"
                            validate={[required, maxLength20]}

                        />
                        <br />
                        <Field
                            component={renderTextarea}
                            name="description"
                            label="Property description"
                            validate={[required]}
                        />
                        <br />
                        <Card.Meta>
                            Guests will see this name when they search for a place
                            to stay.
                        </Card.Meta>
                    </Card.Content>
                </Card>
                <Card style={{ width: "900px" }} color="teal">
                    <Card.Content>
                        <Card.Description style={{ fontSize: "18px" }}>
                            What are the contact details for this property?
                        </Card.Description>
                        <br />
                        <CardDescription>Contact name</CardDescription>
                        <Field
                            component={renderField}
                            name="contactPersonName"
                            type="text"
                            icon="user"
                            validate={[required, maxLength20]}
                        />
                        <CardDescription>
                            <br />
                            Contact number (so we can assist with your registration
                            when needed)
                    </CardDescription>
                        <Field
                            component={renderField}
                            name="contactPhone"
                            type="tel"
                            icon="phone"
                            validate={[required, phoneNumber]}

                        />
                    </Card.Content>
                </Card>
                <Card style={{ width: "900px" }} color="teal">
                    <Card.Content>
                        <Card.Description style={{ fontSize: "18px" }}>
                            Where's your property located?
                        </Card.Description>
                        <CardDescription>
                            <br />
                            Street address
                        </CardDescription>
                        <Field
                            component={renderField}
                            name="address"
                            type="text"
                            label="For example:10 Zelena street"
                            icon="map marker"
                            validate={[required, maxLength20]}

                        />
                        <CardDescription>
                            <br />
                            Address line 2
                        </CardDescription>
                        <Field
                            component={renderField}
                            name="address1"
                            type="text"
                            label="For example: flat number and etc."
                            icon="map marker"
                            validate={[required, maxLength20]}

                        />
                        <CardDescription>
                            <br />
                            Country/Region
                    </CardDescription>
                        <Field
                            component={renderDropdown}
                            options={countriesOptions}
                            name="countryId"
                            label="Country"
                            icon="map marker"
                            onChange={this.onCountryChange}
                            validate={[required]}
                        />
                        <br />
                        <CardDescription>
                            City
                        </CardDescription>
                        <Field
                            component={renderDropdown}
                            selection
                            options={cityOptions}
                            name="cityId"
                            label="City"
                            icon="map marker"
                            validate={[required]}
                        />
                        <Field
                            component={renderField}
                            name="userId"
                            type="hidden"
                        />
                    </Card.Content>
                </Card>

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

const ReduxForm = reduxForm({
    form: 'propertyRegistrationForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
})(BasicInfoPropertyRegistrationForm);

export default connect(mapStateToProps, mapDispatchToProps)(ReduxForm);
