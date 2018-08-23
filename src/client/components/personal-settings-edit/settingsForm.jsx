import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import ImageUploader from "react-images-upload";
import { phoneNumber, email } from "client/regexValidationService";
import inputField from "client/components/input-form";

import {
    Form,
    Header,
    Segment,
    Label,
    Dropdown,
    Checkbox,
    Radio,
    Image,
} from "semantic-ui-react";

export class SettingsForm extends Component {
    state = {
        pic: "",
    };

    updateSettings = data => {
        this.props.updateSettings(data);
    };

    sendSettings = (e, { name, value }) => {
        console.log("SEND TO BACKEND:", name, value);
    };

    //

    handleChange = (e, { name, value }) => {
        console.log(e, name, value);

        const data = {
            [name]: value,
        };

        this.updateSettings(data);
    };

    onDrop = pic => {
        this.setState({
            pic: pic,
        });
    };

    addingItem = (item, bool) => {
        console.log(item, bool);
        if (bool) {
            this.setState({
                [item]: true,
            });
        } else if (!bool) {
            this.setState({
                [item]: false,
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
            payForAccommodationOptions,
            //
            avatarUrl,
            // nickname,
            // birthdayDay,
            // birthdayMonth,
            // birthdayYear,
            // country,
            // //
            // appeal,
            // firstName,
            // secondName,
            // phone,
            // email,
            // address,
            // city,
            // postcode,
            // creditCards,
            // onlinePaymentMethod,
            // whenToPayForAccomodation,
            // smokingInRooms,
            // starCounts,
            // disabledFacilities,
            // favoriteFacilities, // [ "Bar", "Sauna" ]
            // forWhomBook,
            // currency
        } = this.props;
        // const creditCards = {
        //     card0: {
        //         type: "visa",
        //         number: "",
        //         owner: "",
        //         expirationDay: "",
        //         expirationYear: "",
        //         userForBooking: "",
        //         transferRemuneration: ""
        //     }
        // }
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
                            avatarUrl ||
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
                        onChange={e => this.handleChange(e, e.target)}
                        onBlur={e => this.sendSettings(e, e.target)}
                    />
                    <p className="personal_settings-p">Your birthday</p>
                    <Dropdown
                        name="dateDay"
                        fluid
                        selection
                        options={dateOptions.days}
                        onChange={this.sendSettings}
                    />
                    <Dropdown
                        name="dateMonth"
                        fluid
                        selection
                        options={dateOptions.months}
                        onChange={this.sendSettings}
                    />
                    <Dropdown
                        name="dateYear"
                        fluid
                        selection
                        options={dateOptions.years}
                        onChange={this.sendSettings}
                    />
                    <p className="personal_settings-p">Country / Territory</p>
                    <Dropdown
                        name="country"
                        fluid
                        selection
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
                        onChange={e => this.handleChange(e, e.target)}
                        onBlur={e => this.sendSettings(e, e.target)}
                    />
                    <p className="personal_settings-p">Second name</p>
                    <Field
                        component={inputField}
                        name="secondName"
                        label="Second name"
                        type="text"
                        min={4}
                        max={16}
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
                                        this.handleChange(e, e.target)
                                    }
                                    onBlur={e => this.sendSettings(e, e.target)}
                                />
                                <p>City</p>
                                <Field
                                    component={inputField}
                                    name="city"
                                    label="City"
                                    type="text"
                                    onChange={e =>
                                        this.handleChange(e, e.target)
                                    }
                                    onBlur={e => this.sendSettings(e, e.target)}
                                />
                                <p>Country / Territory</p>
                                <Dropdown
                                    fluid
                                    selection
                                    options={countryOptions}
                                />
                                <p>Postcode</p>
                                <Field
                                    component={inputField}
                                    name="postcode"
                                    label="Postcode"
                                    type="number"
                                    onChange={e =>
                                        this.handleChange(e, e.target)
                                    }
                                    onBlur={e => this.sendSettings(e, e.target)}
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
                                                false,
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
                        Washigton Street 21, 123456, New-York, USA
                    </Label>
                </Segment>

                <Segment className="personal_settings-segment">
                    <div className="personal_settings-segment-header">
                        <Header as="h2">Credit cards</Header>
                        <span>Your payment information is kept secure.</span>
                    </div>
                    {this.state.addingCreditcard ? (
                        <div className="personal_settings-adding-creditcard">
                            <p>Type of credit card</p>
                            <Dropdown
                                fluid
                                selection
                                options={paymentOptions}
                            />
                            <p>Number of credit card</p>
                            <Field
                                component={inputField}
                                name="creditcardNumber"
                                label="Creditcard number"
                                type="number"
                                onChange={e => this.handleChange(e, e.target)}
                                onBlur={e => this.sendSettings(e, e.target)}
                            />
                            <p>Name of credit card owner</p>
                            <Field
                                component={inputField}
                                name="creditcardOwnerName"
                                label="Creditcard owner name"
                                type="text"
                                onChange={e => this.handleChange(e, e.target)}
                                onBlur={e => this.sendSettings(e, e.target)}
                            />
                            <p>Expiration date</p>
                            <Dropdown
                                fluid
                                selection
                                options={dateOptions.days}
                                className="personal_settings-date-dropdown-left"
                            />
                            <Dropdown
                                fluid
                                selection
                                options={dateOptions.years}
                                className="personal_settings-date-dropdown-right"
                            />
                            <Checkbox
                                name="bookBussinessTrip"
                                label="Use for booking business trips"
                            />
                            <Checkbox
                                name="transferRemunerationForThisCard"
                                label="Transfer remuneration for this card"
                            />
                        </div>
                    ) : null}
                    {this.state.addingCreditcard ? (
                        <React.Fragment>
                            <Label
                                as="a"
                                content="Save"
                                icon="save"
                                onClick={this.saveCreditcard}
                                color="blue"
                                className="personal_settings-btn"
                            />
                            <Label
                                as="a"
                                content="Cancel"
                                icon="cancel"
                                onClick={() =>
                                    this.addingItem("addingCreditcard", false)
                                }
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
                            className="personal_settings-btn"
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
                        name="onlinePaymentType"
                        className="personal_settings-dropdown-regular"
                        fluid
                        selection
                        options={paymentOptions}
                        onChange={this.sendSettings}
                    />
                    <p className="personal_settings-p">
                        When do you prefer to pay for accommodation?
                    </p>
                    <Dropdown
                        name="whenToPayForAccomodation"
                        className="personal_settings-dropdown-regular"
                        fluid
                        selection
                        options={payForAccommodationOptions}
                        onChange={this.sendSettings}
                    />
                </Segment>

                <Segment className="personal_settings-segment">
                    <div className="personal_settings-segment-header">
                        <Header as="h2">How do you travel</Header>
                        <span>
                            Tell us about how you usually travel so that we can
                            customize the search parameters for you.
                        </span>
                    </div>
                    <p className="personal_settings-p">Smoking in rooms</p>
                    <Dropdown fluid selection options={smokingInRoomsOptions} />
                    <p className="personal_settings-p">Count of stars</p>
                    <Dropdown fluid selection options={starsOptions} />
                    <p className="personal_settings-p">
                        Facilities for disabled guests
                    </p>
                    <Checkbox label="Show options with disabled facilities" />
                    <p className="personal_settings-p">Favorite facilities</p>
                    {this.state.addingFacilities ? (
                        <div className="personal_settings-facilities">
                            <Checkbox label="Restaurant" />
                            <Checkbox label="Non-smoking rooms" />
                            <Checkbox label="Family rooms" />
                            <Checkbox label="Parking space" />
                            <Checkbox label="Wi-Fi" />
                            <Checkbox label="Transfer from / to the airport" />
                            <Checkbox label="Bar" />
                            <Checkbox label="24-hour fron desk" />
                            <Checkbox label="Internet" />
                            <Checkbox label="Fitness Center" />
                            <Checkbox label="Pets allowed" />
                            <Checkbox label="Spa & Wellness Center" />
                            <Checkbox label="Pool" />
                            <Checkbox label="Free Wi-Fi" />
                            <Checkbox label="Luggage Store" />
                            <div className="personal_settings-submit">
                                <Label
                                    as="a"
                                    content="Save"
                                    onClick={this.saveFacilities}
                                    color="blue"
                                    className="personal_settings-btn"
                                />
                                <Label
                                    as="a"
                                    content="Undo"
                                    onClick={() =>
                                        this.addingItem(
                                            "addingFacilities",
                                            false,
                                        )
                                    }
                                    basic
                                    className="personal_settings-btn"
                                />
                            </div>
                        </div>
                    ) : (
                        <Label
                            as="a"
                            content="Add facility"
                            icon="plus square"
                            onClick={() =>
                                this.addingItem("addingFacilities", true)
                            }
                            color="blue"
                            className="personal_settings-btn"
                        />
                    )}
                    <p className="personal_settings-p">For whom do ou book?</p>
                    <div className="personal_settings-radio-booking">
                        <Radio name="bookFor" label="For myself" />
                        <Radio name="bookFor" label="For others" />
                        <Radio name="bookFor" label="For me and others" />
                    </div>
                </Segment>

                <Segment className="personal_settings-segment">
                    <div className="personal_settings-segment-header">
                        <Header as="h2">Password and currency</Header>
                    </div>
                    <p className="personal_settings-p">Currency</p>
                    <Dropdown fluid selection options={currencyOptions} />
                    <p className="personal_settings-p">Password</p>
                    <Label as="a" basic>
                        Change password
                    </Label>
                </Segment>

                <Segment className="personal_settings-segment">
                    <div className="personal_settings-segment-header">
                        <Header as="h2">Privacy</Header>
                    </div>
                    <p className="personal_settings-p">Active sessions</p>
                    <Label as="a" basic>
                        Quit on another sessions
                    </Label>
                </Segment>
            </Form>
        );
    }
}

export default reduxForm({
    form: "personalSettings",
})(SettingsForm);
