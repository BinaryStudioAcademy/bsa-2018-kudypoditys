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
    Radio,
    Image
} from "semantic-ui-react";

export class SettingsForm extends Component {
    state = {
        pic: "",
        address: {
            address: "",
            city: "",
            addressCountry: "",
            postcode: ""
        },
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
        console.log("SEND TO BACKEND:", name, value);
        this.updateSettings({ [name]: value });
    };

    // Address mini-form handlers:
    handleAddressChange = (e, { name, value }) => {
        this.setState({
            address: {
                ...this.state.address,
                [name]: value
            }
        });
    };
    saveAddress = () => {
        const data = {
            ...this.state.address
        };

        this.props.updateSettings({
            ...data
        });
    };
    //

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
                creditcard => creditcard.number != name
            )
        });
    };
    //

    //
    handleFacilitiesChange = value => {
        console.log(value);
        if (this.props.additionalFacilities.includes(value)) {
            this.props.updateSettings({
                additionalFacilities: this.props.additionalFacilities.filter(
                    facility => facility !== value
                )
            });
        } else {
            this.props.updateSettings({
                additionalFacilities: [
                    ...this.props.additionalFacilities,
                    value
                ]
            });
        }
    };

    saveFacilities = () => {
        this.addingItem("addingFacilities", false);
    };
    //

    handleChange = (e, { name, value }) => {
        console.log(e, name, value);

        const data = {
            [name]: value
        };

        this.updateSettings(data);
    };

    onDrop = pic => {
        this.setState({
            pic: pic
        });
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
            smokingInRoomsOptions,
            starsOptions,
            currencyOptions,
            appealOptions,
            payForAccommodationOptions
        } = this.props;
        return (
            <Form onSubmit={handleSubmit}>
                <Segment className="personal_settings-segment">
                    <div className="personal_settings-segment-header">
                        <Header as="h2">Your account</Header>
                        <span>
                            This data is displayed next to your posted reviews,
                            ratings, photos, etc. Any changes you make will also
                            be visible in previous publications.
                        </span>
                    </div>
                    <p className="personal_settings-p">Main photo</p>
                    <Image
                        style={{ width: "150px", height: "150px" }}
                        src={
                            this.props.avatarUrl ||
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
                        onBlur={e => this.sendSettings(e, e.target)}
                    />
                    <p className="personal_settings-p">Your birthday</p>
                    <Dropdown
                        name="dateDay"
                        fluid
                        selection
                        defaultValue={this.props.dateDay}
                        options={dateOptions.days}
                        onChange={this.sendSettings}
                    />
                    <Dropdown
                        name="dateMonth"
                        fluid
                        selection
                        defaultValue={this.props.dateMonth}
                        options={dateOptions.months}
                        onChange={this.sendSettings}
                    />
                    <Dropdown
                        name="dateYear"
                        fluid
                        selection
                        defaultValue={this.props.dateYear}
                        options={dateOptions.years}
                        onChange={this.sendSettings}
                    />
                    <p className="personal_settings-p">Country / Territory</p>
                    <Dropdown
                        name="country"
                        fluid
                        selection
                        defaultValue={this.props.country}
                        options={countryOptions}
                        onChange={this.sendSettings}
                    />
                </Segment>

                <Segment className="personal_settings-segment">
                    <div className="personal_settings-segment-header">
                        <Header as="h2">For reservation</Header>
                        <span>
                            This data is needed only to automatically fill in
                            the appropriate fields and speed up the booking
                            process. Your information is kept safe, it is not
                            transferred to third parties.
                        </span>
                    </div>
                    <p className="personal_settings-p">Appeal</p>
                    <Dropdown
                        name="appeal"
                        fluid
                        selection
                        defaultValue={this.props.appeal}
                        options={appealOptions}
                        onChange={this.sendSettings}
                    />
                    <p className="personal_settings-p">First name</p>
                    <Field
                        component={inputField}
                        name="firstName"
                        label="First name"
                        type="text"
                        min={4}
                        max={16}
                        val={this.props.firstName}
                        onChange={e => this.handleChange(e, e.target)}
                        onBlur={e => this.sendSettings(e, e.target)}
                    />
                    <p className="personal_settings-p">Last name</p>
                    <Field
                        component={inputField}
                        name="lastName"
                        label="Last name"
                        type="text"
                        min={4}
                        max={16}
                        val={this.props.lastName}
                        onChange={e => this.handleChange(e, e.target)}
                        onBlur={e => this.sendSettings(e, e.target)}
                    />
                    <p className="personal_settings-p">Phone</p>
                    <Field
                        component={inputField}
                        name="phone"
                        label="Phone number"
                        type="number"
                        min={4}
                        max={16}
                        className="personal_settings-field"
                        pointing="left"
                        val={this.props.phone}
                        validate={[phoneNumber]}
                        onChange={e => this.handleChange(e, e.target)}
                        onBlur={e => this.sendSettings(e, e.target)}
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
                        onBlur={e => this.sendSettings(e, e.target)}
                    />
                    <p className="personal_settings-p">Address</p>
                    {this.state.addingAddress ? (
                        <React.Fragment>
                            <div className="personal_settings-adding-address">
                                <p>Address</p>
                                <Field
                                    component={inputField}
                                    name="address"
                                    label="Address"
                                    type="text"
                                    onChange={e =>
                                        this.handleAddressChange(e, e.target)
                                    }
                                />
                                <p>City</p>
                                <Field
                                    component={inputField}
                                    name="city"
                                    label="City"
                                    type="text"
                                    onChange={e =>
                                        this.handleAddressChange(e, e.target)
                                    }
                                />
                                <p>Country / Territory</p>
                                <Dropdown
                                    name="addressCountry"
                                    fluid
                                    selection
                                    defaultValue={this.props.country}
                                    options={countryOptions}
                                    onChange={this.handleAddressChange}
                                />
                                <p>Postcode</p>
                                <Field
                                    component={inputField}
                                    name="postcode"
                                    label="Postcode"
                                    type="number"
                                    onChange={e =>
                                        this.handleAddressChange(e, e.target)
                                    }
                                />
                                <div className="personal_settings-submit">
                                    <Label
                                        as="a"
                                        content="Save"
                                        onClick={this.saveAddress}
                                        color="blue"
                                        className="personal_settings-btn"
                                    />
                                    <Label
                                        as="a"
                                        content="Undo"
                                        onClick={() =>
                                            this.addingItem(
                                                "addingAddress",
                                                false
                                            )
                                        }
                                        basic
                                        className="personal_settings-btn"
                                    />
                                </div>
                            </div>
                        </React.Fragment>
                    ) : (
                        <Label
                            as="a"
                            content="Add address"
                            icon="plus square"
                            onClick={() =>
                                this.addingItem("addingAddress", true)
                            }
                            color="blue"
                            className="personal_settings-btn"
                        />
                    )}
                    <Label basic>
                        {this.props.address},{this.props.postcode},
                        {this.props.city},{this.props.addressCountry}
                    </Label>
                </Segment>

                <Segment className="personal_settings-segment">
                    <div className="personal_settings-segment-header">
                        <Header as="h2">Credit cards</Header>
                        <span>Your payment information is kept secure.</span>
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
                        <span>Your payment information.</span>
                    </div>
                    <p className="personal_settings-p">
                        What payment type do you prefer?
                    </p>
                    <Dropdown
                        name="paymentType"
                        className="personal_settings-dropdown-regular"
                        fluid
                        selection
                        defaultValue={this.props.paymentType}
                        options={paymentOptions}
                        onChange={this.sendSettings}
                    />
                </Segment>
                <Segment className="personal_settings-segment">
                    <div className="personal_settings-segment-header">
                        <Header as="h2">Password and currency</Header>
                    </div>
                    <p className="personal_settings-p">Currency</p>
                    <Dropdown
                        name="currency"
                        fluid
                        selection
                        defaultValue={this.props.currency}
                        options={currencyOptions}
                        onChange={this.sendSettings}
                    />
                    <p className="personal_settings-p">Password</p>
                    <Label as="a" basic>
                        Change password
                    </Label>
                </Segment>
            </Form>
        );
    }
}

export default reduxForm({
    form: "personalSettings"
})(SettingsForm);
