import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import ImageUploader from "react-images-upload";
import { phoneNumber, email } from "client/regexValidationService";
import inputField from "./input";

import {
    Form,
    Header,
    Icon,
    Segment,
    Label,
    Dropdown,
    Checkbox,
    Image,
    Button,
    Message
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

    render() {
        const {
            handleSubmit,
            dateOptions,
            countryOptions,
            paymentOptions,
            currencyOptions,
            appealOptions
        } = this.props;
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
                    <Image
                        circular
                        style={{ width: "150px", height: "150px" }}
                        src={
                            this.props.avatar ||
                            "https://www.mautic.org/media/images/default_avatar.png"
                        }
                        alt="Photo"
                    />
                    <ImageUploader
                        className="personal_settings-avatar"
                        buttonText="Choose photo"
                        withPreview={false}
                        singleImage={true}
                        withLabel={false}
                        withIcon={false}
                        buttonClassName="personal_settings-avatar-button"
                        onChange={this.onDrop}
                        imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                        maxFileSize={5242880}
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
                        name="phone"
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
                    <Field
                        component={inputField}
                        name="email"
                        label="E-mail"
                        type="email"
                        min={4}
                        max={16}
                        className="personal_settings-field"
                        pointing="left"
                        val={this.props.email}
                        validate={[email]}
                        onChange={e => this.handleChange(e, e.target)}
                    />
                    <p className="personal_settings-p">Address</p>
                    <Field
                        component={inputField}
                        name="address"
                        label="Address"
                        type="text"
                        val={this.props.address}
                        onChange={e => this.handleChange(e, e.target)}
                    />
                </Segment>

                <Segment className="personal_settings-segment">
                    <div className="personal_settings-segment-header">
                        <Header as="h2">Credit cards</Header>
                        <Message info>
                            Your payment information is kept secure.
                        </Message>
                    </div>
                    {this.props.creditCards.map((creditcard, i) => (
                        <Label
                            className="personal_settings-creditcard-label"
                            basic
                            key={i}
                        >
                            <div className="personal_settings-creditcard-label-div-type">
                                {creditcard.type}
                            </div>
                            <div className="personal_settings-creditcard-label-div-number">
                                Number: {creditcard.number}
                            </div>
                            <div className="personal_settings-creditcard-label-div-owner">
                                Owner: {creditcard.owner}
                            </div>
                            <div className="personal_settings-creditcard-label-div-expiration">
                                Expiration: {creditcard.expirationDay} -{" "}
                                {creditcard.expirationYear}
                            </div>
                            <div className="personal_settings-creditcard-label-div-usedForBooking">
                                {creditcard.usedForBooking
                                    ? "Used for booking"
                                    : "Not used for booking"}
                            </div>
                            <div className="personal_settings-creditcard-label-div-transferRemuneration">
                                {creditcard.transferRemuneration
                                    ? "Transfer remuneration"
                                    : "Do not transfer remuneration"}
                            </div>
                            <Label
                                name={creditcard.number}
                                as="a"
                                basic
                                onClick={this.removeCreditCard}
                            >
                                <Icon name="close" />
                                Remove
                            </Label>
                        </Label>
                    ))}
                    {this.state.addingCreditcard ? (
                        <div className="personal_settings-adding-creditcard">
                            {this.state.addingCreditcard.error ? (
                                <Label color="red">
                                    Please, specify the correct data
                                </Label>
                            ) : null}
                            <p>Type of credit card</p>
                            <Dropdown
                                name="type"
                                fluid
                                selection
                                placeholder="Select creditcard"
                                options={paymentOptions}
                                onChange={this.handleCreditCardsChange}
                            />
                            <p>Number of credit card</p>
                            <Field
                                component={inputField}
                                name="number"
                                label="Creditcard number"
                                type="number"
                                onChange={e =>
                                    this.handleCreditCardsChange(e, e.target)
                                }
                            />
                            <p>Name of credit card owner</p>
                            <Field
                                component={inputField}
                                name="owner"
                                label="Creditcard owner name"
                                type="text"
                                onChange={e =>
                                    this.handleCreditCardsChange(e, e.target)
                                }
                            />
                            <p>Expiration date</p>
                            <Dropdown
                                name="expirationDay"
                                fluid
                                selection
                                placeholder="Exp.day"
                                options={dateOptions.days}
                                className="personal_settings-date-dropdown-left"
                                onChange={this.handleCreditCardsChange}
                            />
                            <Dropdown
                                name="expirationYear"
                                fluid
                                selection
                                placeholder="Exp.year"
                                options={dateOptions.years}
                                className="personal_settings-date-dropdown-right"
                                onChange={this.handleCreditCardsChange}
                            />
                            <Checkbox
                                name="usedForBooking"
                                label="Use for booking business trips"
                                onChange={e =>
                                    this.handleCreditCardsChange(e, {
                                        name: "usedForBooking",
                                        value: !this.state.creditCard
                                            .usedForBooking
                                    })
                                }
                            />
                            <Checkbox
                                name="transferRemuneration"
                                label="Transfer remuneration for this card"
                                onChange={e =>
                                    this.handleCreditCardsChange(e, {
                                        name: "transferRemuneration",
                                        value: !this.state.creditCard
                                            .transferRemuneration
                                    })
                                }
                            />
                        </div>
                    ) : null}
                    {this.state.addingCreditcard ? (
                        <React.Fragment>
                            <Label
                                as="a"
                                content="Save"
                                icon="save"
                                onClick={this.saveCreditCard}
                                color="blue"
                                className="personal_settings-btn"
                            />
                            <Label
                                as="a"
                                content="Cancel"
                                icon="cancel"
                                onClick={() => (
                                    this.addingItem("addingCreditcard", false),
                                    this.cancelCreditCard()
                                )}
                                basic
                                className="personal_settings-btn"
                            />
                        </React.Fragment>
                    ) : (
                        <Label
                            as="a"
                            content="Add credit"
                            icon="plus square"
                            onClick={() =>
                                this.addingItem("addingCreditcard", true)
                            }
                            color="blue"
                            className="personal_settings-btn personal_settings-add-credit"
                        />
                    )}
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
