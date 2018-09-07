import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import { reduxForm, Field } from "redux-form";
import {
    Button, Container, List, Form, Card
} from "semantic-ui-react";
import { required } from "client/regexValidationService.js";
import RadioGroup from "client/components/input-form/radio-group";
import renderField from 'client/components/input-form/renderField';
import renderDropdown from 'client/components/input-form/dropdown';
import renderCheckbox from 'client/components/input-form/checkbox';

import { mapDispatchToProps, mapStateToProps } from './container';

const parseNumber = value => {
    const number = Number(value);
    if (isNaN(number)) {
        return 0;
    }

    return number;
};

class FacilitiesPropertyRegistrationForm extends Component {

    componentDidMount() {
        const { languages, facilities } = this.props;

        if (!languages || languages.length === 0) {
            this.props.getLanguages();
        }

        if (!facilities || facilities.length === 0) {
            this.props.getFacilities();
        }
    }

    renderInternetCard() {
        const { hasInternet } = this.props;

        const internetOptions = [
            {
                value: 'free',
                label: 'Yes, for free'
            },
            {
                value: 'paid',
                label: 'Yes, for aditional fee'
            },
            {
                value: 'absent',
                label: 'No'
            }
        ];

        return (
            <Card style={{ width: "900px" }} color="teal">
                <Card.Content>
                    <Card.Description style={{ fontSize: "18px" }}>
                        Internet. Do you provide guests with Wi-Fi?
                    </Card.Description>
                    <Field
                        component={RadioGroup}
                        name="basicFacility.hasInternet"
                        options={internetOptions}
                    />
                    {hasInternet !== 'paid' ? <Fragment /> :
                        <Field
                            component={renderField}
                            name="basicFacility.internetPrice"
                            label="USD"
                            type="number"
                            icon="dollar sign"
                            validate={[required]}
                            parse={parseNumber}
                        />
                    }
                    <Card.Meta>
                        Guests will see this name when they search for a place
                        to stay.
                    </Card.Meta>
                </Card.Content>
            </Card>
        );
    }

    renderParkingCard() {
        const { hasParking } = this.props;

        const parkingOptions = [
            {
                key: 1,
                value: 'free',
                text: 'Yes, for free'
            },
            {
                key: 2,
                value: 'paid',
                text: 'Yes, but paid'
            },
            {
                key: 3,
                value: 'absent',
                text: 'No'
            }
        ];

        const parkingTypeOptions = [
            {
                key: 1,
                value: 'true',
                text: 'Private'
            },
            {
                key: 2,
                value: 'false',
                text: 'Public'
            }
        ];

        const territoryOptions = [
            {
                key: 1,
                value: 'true',
                text: 'On Territory'
            },
            {
                key: 2,
                value: 'false',
                text: 'Off Territory'
            }
        ];

        const needToBookOptions = [
            {
                key: 1,
                value: 'true',
                text: 'Need to book'
            },
            {
                key: 2,
                value: 'false',
                text: 'No need to book'
            }
        ];

        return (
            <Card style={{ width: "900px" }} color="teal">
                <Card.Content>
                    <Card.Description style={{ fontSize: "18px" }}>
                        Parking. This information is especially important to those who travel by car.
                    </Card.Description>
                    <br />
                    <Field
                        component={renderDropdown}
                        options={parkingOptions}
                        name="basicFacility.hasParking"
                        label="Parking"
                        icon="car"
                        validate={[required]}
                    />

                    {hasParking && hasParking !== 'absent' &&
                        <Fragment>
                            <Field
                                component={renderDropdown}
                                options={parkingTypeOptions}
                                name="basicFacility.isPrivate"
                                label="Parking Type"
                                icon="privacy"
                                validate={[required]}
                            />

                            <Field
                                component={renderDropdown}
                                options={territoryOptions}
                                name="basicFacility.isOnTerritory"
                                label="Placement"
                                icon="street view"
                                validate={[required]}
                            />

                            <Field
                                component={renderDropdown}
                                options={needToBookOptions}
                                name="basicFacility.needToBook"
                                label="Booking"
                                icon="street view"
                                validate={[required]}
                            />

                            {hasParking === 'paid' &&
                                <Field
                                    component={renderField}
                                    name="basicFacility.parkingPrice"
                                    label="USD"
                                    type="number"
                                    icon="dollar sign"
                                    validate={[required]}
                                    parse={parseNumber}
                                />
                            }
                        </Fragment>
                    }

                    <Card.Meta>
                        Guests will see this name when they search for a place
                        to stay.
                    </Card.Meta>
                </Card.Content>
            </Card>
        );
    }

    renderLanguagesCard() {
        const { languages = [] } = this.props;
        const languagesOptions = languages.map((x, i) => ({
            key: i,
            value: { id: x.id, name: x.name },
            text: x.name
        }));

        return (
            <Card style={{ width: "900px" }} color="teal">
                <Card.Content>
                    <Card.Description style={{ fontSize: "18px" }}>
                        Languages. What languages do you or your staff speak?
                    </Card.Description>

                    <Field
                        component={renderDropdown}
                        options={languagesOptions}
                        name="languages"
                        label="Languages"
                        icon="language"
                        multiple
                        validate={[required]}
                    />

                    <Card.Meta>
                        Guests will see this name when they search for a place
                        to stay.
                    </Card.Meta>
                </Card.Content>
            </Card>
        );
    }

    renderFacilitiesCard() {
        const { facilities = [] } = this.props;

        return (
            <Card style={{ width: "900px" }} color="teal">
                <Card.Content>
                    <Card.Description style={{ fontSize: "18px" }}>
                        Languages. What languages do you or your staff speak?
                    </Card.Description>

                    <List horizontal relaxed>
                        {
                            facilities.map((facility, i) => (
                                <List.Item key={i} style={{ margin: '1rem', padding: '0' }}>
                                    <Field
                                        component={renderCheckbox}
                                        name={`facilities.${facility.id}`}
                                        label={facility.name}
                                    />
                                </List.Item>

                            ))
                        }
                    </List>

                    <Card.Meta>
                        Guests will see this name when they search for a place
                        to stay.
                    </Card.Meta>
                </Card.Content>
            </Card>
        );
    }

    render() {
        const {
            handleSubmit, submitting, pristine
        } = this.props;
        return (
            <Form onSubmit={handleSubmit}>
                <Container className="property_services_tab-container">
                    {this.renderInternetCard()}

                    {this.renderParkingCard()}

                    {this.renderLanguagesCard()}

                    {this.renderFacilitiesCard()}
                </Container>

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
    initialValues: { // ????
        basicFacility: {
            hasParking: 'false',
            hasInternet: 'false'
        }
    }
})(FacilitiesPropertyRegistrationForm);

export default connect(mapStateToProps, mapDispatchToProps)(ReduxForm);