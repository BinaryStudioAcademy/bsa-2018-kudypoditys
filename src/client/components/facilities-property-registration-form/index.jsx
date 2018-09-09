import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import { reduxForm, Field } from "redux-form";
import {
    Button, Container, Form, Card, Header, Grid
} from "semantic-ui-react";
import { required } from "client/regexValidationService.js";
import RadioGroup from "client/components/input-form/radio-group";
import renderField from 'client/components/input-form/renderField';
import renderDropdown from 'client/components/input-form/dropdown';
import renderCheckbox from 'client/components/input-form/checkbox';

import { mapDispatchToProps, mapStateToProps } from './container';
import './index.scss'

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
            <Fragment>
                <Header as='h2' style={{ fontSize: "18px" }} className="required">
                    Internet. Do you provide guests with Wi-Fi?
                </Header>
                <div className="internet-options">
                    <Field
                        component={RadioGroup}
                        name="basicFacility.hasInternet"
                        options={internetOptions}
                    />
                </div>
                {hasInternet !== 'paid' ? <Fragment /> :
                    <div className="wrapper">
                        <Field
                            component={renderField}
                            name="basicFacility.internetPrice"
                            label="USD"
                            type="number"
                            icon="dollar sign"
                            validate={[required]}
                            parse={parseNumber}
                        />
                    </div>
                }
                <div className="meta">
                    Guests should know if they have to pay for internet.
                </div>
            </Fragment>
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
            <Fragment >
                <Header as='h2' style={{ fontSize: "18px" }} className="required">
                    Parking. This information is especially important to those who travel by car.
                </Header>
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
                            icon="clipboard list"
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

                <div className="meta">
                    This is very important for quests if they travel by car.
                </div>
            </Fragment>
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
            <Fragment>
                <Header style={{ fontSize: "18px" }} className="required">
                    Languages. What languages do you or your staff speak?
                </Header>

                <Field
                    component={renderDropdown}
                    options={languagesOptions}
                    name="languages"
                    label="Languages"
                    multiple
                    validate={[required]}
                />

                <div className="meta">
                    Guests should know what languages You know, before booking
                </div>
            </Fragment>
        );
    }

    renderFacilitiesCard() {
        const { facilities = [] } = this.props;

        return (
            <Fragment>
                <Header as="h2" style={{ fontSize: "18px" }} className="required">
                    Facilities. What facilities do You offer?
                </Header>

                <Grid padded columns={3} style={{ marginTop: "20px", marginBottom: "20px" }}>
                    {facilities.map((facility, i) => (
                        <Grid.Column key={i} style={{ padding: "10px" }}>
                            <Field
                                component={renderCheckbox}
                                name={`facilities.${facility.id}`}
                                label={facility.name}
                            />
                        </Grid.Column>
                    ))}
                </Grid>

                <div className="meta">
                    Guests will see these facilities on property page
                    </div>
            </Fragment>
        );
    }

    render() {
        const {
            handleSubmit, submitting, pristine
        } = this.props;
        return (
            <Form onSubmit={handleSubmit} id="facilitiesPropertyRegistartionForm">
                <Container className="property_services_tab-container">
                    {this.renderInternetCard()}
                </Container>
                <Container className="property_services_tab-container">
                    {this.renderParkingCard()}
                </Container>
                <Container className="property_services_tab-container">
                    {this.renderLanguagesCard()}
                </Container>
                <Container className="property_services_tab-container">
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
})(FacilitiesPropertyRegistrationForm);

export default connect(mapStateToProps, mapDispatchToProps)(ReduxForm);