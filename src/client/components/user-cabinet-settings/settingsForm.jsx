import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import ImageUploader from "react-images-upload";
import { phoneNumber, email } from "client/regexValidationService";
import inputField from "./input";
import AlgoliaPlaces from "algolia-places-react";

import {
    Form,
    Header,
    Icon,
    Segment,
    Dropdown,
    Image,
    Button,
    Message,
    Input,
    Dimmer
} from "semantic-ui-react";

export class SettingsForm extends Component {
    state = {
        creditCard: {
            type: "",
            number: "",
            owner: "",
            expirationDay: "",
            expirationYear: "",
            usedForBooking: "",
            transferRemuneration: ""
        }
    };

    updateSettings = data => {
        this.props.updateSettings(data);
    };

    handleAddressChange = suggestion => {
        const value = `${suggestion.name} ${suggestion.administrative} ${
            suggestion.country
        }`;
        const data = {
            address: value
        };

        this.updateSettings(data);
    };

    sendSettings = (e, { name, value }) => {
        this.props.sendSettings();
    };

    resetPassword = () => {
        this.props.resetPassword(this.props.email);
    };

    // Credit cards mini-form handlers:
    handleCreditCardsChange = (e, { name, value }) => {
        this.setState({
            creditCard: {
                ...this.state.creditCard,
                [name]: value
            }
        });
    };
    saveCreditCard = () => {
        const data = {
            ...this.state.creditCard
        };
        if (
            !data.type ||
            data.type.length < 1 ||
            !data.number ||
            data.number.length < 1 ||
            !data.owner ||
            data.owner.length < 1 ||
            !data.expirationDay ||
            data.expirationDay.length < 1 ||
            !data.expirationYear ||
            data.expirationYear.length < 1
        ) {
            this.setState({
                addingCreditcard: {
                    error: true
                }
            });

            return;
        }
        this.props.updateSettings({
            creditCards: [...this.props.creditCards, { ...data }]
        });

        this.addingItem("addingCreditcard", false);
        this.cancelCreditCard();
    };
    cancelCreditCard = () => {
        this.setState({
            creditCard: {
                type: "",
                number: "",
                owner: "",
                expirationDay: "",
                expirationYear: "",
                usedForBooking: "",
                transferRemuneration: ""
            }
        });
    };
    removeCreditCard = (e, { name, value }) => {
        this.updateSettings({
            creditCards: this.props.creditCards.filter(
                creditcard => creditcard.number !== name
            )
        });
    };

    handleChange = (e, { name, value }) => {
        console.log(e);
        const data = {
            [name]: value
        };

        this.updateSettings(data);
    };

    onDrop = pic => {
        this.props.uploadAvatar(pic);
    };

    addingItem = (item, bool) => {
        console.log(item, bool);
        if (bool) {
            this.setState({
                [item]: true
            });
        } else if (!bool) {
            this.setState({
                [item]: false
            });
        }
    };
    handleDimmerShow = () => {
        this.setState({ active: true });
    };
    handleDimmerHide = () => {
        this.setState({ active: false });
    };

    render() {
        const {
            handleSubmit,
            countryOptions,
            paymentOptions,
            currencyOptions,
            appealOptions,
            avatarLoading
        } = this.props;
        const { active } = this.state;
        const content = avatarLoading ? (
            <Icon loading name="spinner" />
        ) : (
            <div>
                <ImageUploader
                    className="personal_settings-avatar"
                    withPreview={false}
                    singleImage={true}
                    withLabel={false}
                    withIcon={false}
                    optimisticPreviews
                    multiple={false}
                    pseudobuttonContent={
                        <Icon
                            circular
                            title="Add new avatar"
                            size="big"
                            name="add"
                            color="white"
                        />
                    }
                    buttonText="Update"
                    buttonClassName="personal_settings-avatar-button"
                    onChange={this.onDrop}
                    imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                    maxFileSize={5242880}
                />
                <Button
                    primary
                    className="avatar_del_btn"
                    onClick={this.props.avatarDelete}
                >
                    Delete
                </Button>
            </div>
        );
        return (
            <Form onSubmit={handleSubmit}>
                <Segment className="personal_settings-segment">
                    <div className="personal_settings-segment-header">
                        <Header as="h2">Your account</Header>
                        <Message info>
                            This data is displayed next to your posted reviews,
                            ratings, photos, etc. Any changes you make will also
                            be visible in previous publications.
                        </Message>
                    </div>
                    <p className="personal_settings-p">Main photo</p>
                    <Dimmer.Dimmable
                        as={Image}
                        circular
                        style={{ width: "150px", height: "150px" }}
                        dimmed={active}
                        dimmer={{ active, content }}
                        onMouseEnter={this.handleDimmerShow}
                        onMouseLeave={this.handleDimmerHide}
                        size="medium"
                        src={
                            this.props.avatar ||
                            "https://www.mautic.org/media/images/default_avatar.png"
                        }
                    />
                    <p className="personal_settings-p">Your nickname</p>
                    <Field
                        component={inputField}
                        name="nickname"
                        label="Nickname"
                        type="text"
                        min={4}
                        max={32}
                        val={this.props.nickname}
                        onChange={e => this.handleChange(e, e.target)}
                    />
                    <p className="personal_settings-p">Country</p>
                    <Dropdown
                        name="countryId"
                        fluid
                        selection
                        onChange={this.handleChange}
                        defaultValue={
                            paymentOptions[this.props.countryId - 1].value
                        }
                        options={countryOptions}
                    />
                </Segment>

                <Segment className="personal_settings-segment">
                    <div className="personal_settings-segment-header">
                        <Header as="h2">For reservation</Header>
                        <Message info>
                            This data is needed only to automatically fill in
                            the appropriate fields and speed up the booking
                            process. Your information is kept safe, it is not
                            transferred to third parties.
                        </Message>
                    </div>
                    <p className="personal_settings-p">Appeal</p>
                    <Dropdown
                        name="appeal"
                        fluid
                        selection
                        defaultValue={this.props.appeal}
                        options={appealOptions}
                    />
                    <p className="personal_settings-p">Full name</p>
                    <Field
                        component={inputField}
                        name="fullName"
                        label="Full Name"
                        type="text"
                        min={4}
                        max={16}
                        val={this.props.fullName}
                        onChange={e => this.handleChange(e, e.target)}
                    />
                    <p className="personal_settings-p">Phone</p>
                    <Field
                        component={inputField}
                        name="phoneNumber"
                        label="Phone number"
                        type="tel"
                        min={4}
                        max={16}
                        className="personal_settings-field"
                        pointing="left"
                        val={this.props.phoneNumber}
                        validate={[phoneNumber]}
                        onChange={e => this.handleChange(e, e.target)}
                    />
                    <p className="personal_settings-p">E-mail</p>
                    <Input
                        name="email"
                        placeholder="E-mail"
                        disabled
                        defaultValue={this.props.email}
                    />
                    <p className="personal_settings-p">Address</p>
                    <AlgoliaPlaces
                        placeholder={this.props.address}
                        name="address"
                        options={{
                            type: "address"
                        }}
                        onChange={({ suggestion }) =>
                            this.handleAddressChange(suggestion)
                        }
                    />
                </Segment>
                <Segment className="personal_settings-segment">
                    <div className="personal_settings-segment-header">
                        <Header as="h2">Prepayment preferences</Header>
                        <Message info>Your payment information.</Message>
                    </div>
                    <p className="personal_settings-p">
                        What payment type do you prefer?
                    </p>
                    <Dropdown
                        name="paymentTypeId"
                        className="personal_settings-dropdown-regular"
                        fluid
                        selection
                        onChange={this.handleChange}
                        defaultValue={
                            paymentOptions[this.props.paymentTypeId - 1].value
                        }
                        options={paymentOptions}
                    />
                </Segment>
                <Segment className="personal_settings-segment">
                    <div className="personal_settings-segment-header">
                        <Header as="h2">Password and currency</Header>
                    </div>
                    <p className="personal_settings-p">Currency</p>
                    <Dropdown
                        name="preferredCurrency"
                        fluid
                        selection
                        onChange={this.handleChange}
                        defaultValue={this.props.preferredCurrency}
                        options={currencyOptions}
                    />
                    <p className="personal_settings-p">Password</p>
                    <Button primary onClick={this.resetPassword}>
                        <Icon name="erase" />
                        Change password
                    </Button>
                </Segment>
                <Segment>
                    <Button primary onClick={this.sendSettings}>
                        <Icon name="save outline" />
                        Save
                    </Button>
                </Segment>
            </Form>
        );
    }
}

export default reduxForm({
    form: "personalSettings"
})(SettingsForm);
