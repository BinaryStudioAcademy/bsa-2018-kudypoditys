import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import { reduxForm, Field } from "redux-form";
import {
    Button, Container, Form, Header, Grid, Icon, Modal, Input
} from "semantic-ui-react";
import { required } from "client/regexValidationService.js";
import RadioGroup from "client/components/input-form/radio-group";
import renderField from 'client/components/input-form/renderField';
import renderDropdown from 'client/components/input-form/dropdown';
import renderCheckbox from 'client/components/input-form/checkbox';

import { internetOptions, parkingOptions, parkingTypeOptions, territoryOptions, needToBookOptions } from './staticData';

import { mapDispatchToProps, mapStateToProps } from './container';
import './index.scss'

const parseNumber = value => {
    const number = Number(value);
    if (isNaN(number)) {
        return 0;
    }

    return number;
};

class FacilitiesPropertyForm extends Component {

    state = { modalOpen: false , language: '' }

    handleOpen = (event) => {
        event.preventDefault();
        this.setState({ modalOpen: true })
    }

    handleClose = () => this.setState({ modalOpen: false })

    handleSubmitLanguageCreate = () => {
        this.props.createLanguage(this.state.language);
        this.setState({language: ''});
        this.handleClose();
    }

    handleLanguageChange = (e) => this.setState({language: e.target.value});

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
                <div className="lang-container">
                    <div className='lang-input'>
                        <Field
                            component={renderDropdown}
                            options={languagesOptions}
                            name="languages"
                            label="Languages"
                            multiple
                            validate={[required]}
                        />
                    </div>
                    <Modal
                        size={"tiny"}
                        open={this.state.modalOpen}
                        trigger={
                            <div className='lang-btn-outer-container'>
                                <div className='lang-btn-inner-container'>
                                    <Button
                                        className='lang-button'
                                        onClick={this.handleOpen}
                                        content={<Icon name='plus' color="white" />}/>
                                </div>
                            </div>
                            }>
                        <Modal.Header>Input language name</Modal.Header>
                        <Modal.Content>
                            <Input  value={this.state.language}
                                    onChange={this.handleLanguageChange}
                                    style={{width : "100%"}}
                                    placeholder="language name..."/>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button onClick={this.handleClose} negative>Cancel</Button>
                            <Button type={"button"} onClick={this.handleSubmitLanguageCreate} positive content='Create' />
                        </Modal.Actions>
                    </Modal>
                </div>
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
                        <Grid.Column key={facility.id} style={{ padding: "10px" }}>
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
            handleSubmit, submitting, pristine, isEdit
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
                    disabled={!(isEdit || !pristine) || submitting}
                    type="submit"
                >Continue</Button>
            </Form>
        );
    }
}

const ReduxForm = reduxForm({
    form: 'propertyForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
})(FacilitiesPropertyForm);

export default connect(mapStateToProps, mapDispatchToProps)(ReduxForm);