import React from "react";
import { reduxForm, Field } from "redux-form";
import {Button, Checkbox, Container, Dropdown, Header, Label, Radio, Segment} from "semantic-ui-react";
import { required } from "client/regexValidationService.js"
import InputPrice from "./inputPrice";

export const TabForm = (props) => {
  
    const {
        internet,
        internetFee,
        parking,
        parkingOptions,
        languages,
        languagesOptions,
        facilities,
        facilitiesOptions,
        handleChange,
        handleFacilities,
        handleLanguages,
        handleParking
    } = props;

    return (
        <form onSubmit={props.handleSubmit}>
            <Container className="property_services_tab-container">
                <Segment className="property_services_tab-segment">
                    <Header as="h4">Internet</Header>
                    <p>Do you provide guests with Wi-Fi?</p>
                    <Segment compact className="property_services_tab-radio-segment">
                        <Radio name="internet" checked={internet === "free"} value="free" label="Yes, for free" onChange={handleChange}/>
                    </Segment>
                    <Segment compact className="property_services_tab-radio-segment">
                        <Radio name="internet" checked={internet === "additional"} value="additional" label="For additional fee" onChange={handleChange}/>
                    </Segment>
                    <Segment compact className="property_services_tab-radio-segment">
                        <Radio name="internet" checked={internet === "none"} value="none" label="No" onChange={handleChange}/>
                    </Segment>

                    {
                        internet === "additional" ?
                            <div className="property_services_tab-switched-segment">
                                <p>How much (per day)?</p>
                                <Field classname={"property_services_tab-input-error"} component={InputPrice} label="USD" type="number" name="internetFee" onChange={(e) => handleChange(e, e.target)} pholder="0.00" val={internetFee} validate={[required]}/>
                            </div>
                            :
                            null
                    }
                </Segment>
                <Segment className="property_services_tab-segment">
                    <Header as="h4">Parking</Header>
                    <Label>
                        This information is especially important to those who travel by car.
                    </Label>
                    <div className="property_services_tab-parking">
                        <div>
                            <p>Is parking provided?</p>
                            <Dropdown name="providing" selection onChange={handleParking} value={parking.providing} options={parkingOptions.providing}/>
                        </div>
                        {
                            parking.providing !== "none" ?
                                <React.Fragment>
                                    <div>
                                        <p>Type</p>
                                        <Dropdown name="type" onChange={handleParking} value={parking.type} selection options={parkingOptions.type} />
                                    </div>
                                    <div>
                                        <p>Placement</p>
                                        <Dropdown name="placement" onChange={handleParking} value={parking.placement} selection options={parkingOptions.placement} />
                                    </div>
                                    <div>
                                        <p>Booking</p>
                                        <Dropdown name="booking" onChange={handleParking} value={parking.booking} selection options={parkingOptions.booking} />
                                    </div>
                                    { parking.providing === "non_free" ?
                                        <div>
                                            <p>Price</p>
                                            <Field classname={"property_services_tab-input-error"} component={InputPrice} label="USD" type="number" name="priceForDay" onChange={(e) => handleParking(e, e.target)} pholder="0.00" val={parking.priceForDay} validate={[required]}/>
                                        </div>
                                        : null
                                    }

                                </React.Fragment>
                                : null
                        }
                    </div>
                </Segment>
                <Segment className="property_services_tab-segment">
                    <Header as="h4">Languages</Header>
                    <Label>
                        What languages do you or your staff speak?
                    </Label>
                    <Dropdown placeholder="Choose language(s)" selection name="language" value={languages} onChange={handleLanguages} multiple options={languagesOptions}/>
                </Segment>
                <Segment className="property_services_tab-segment">
                    <Header as="h4">Facilities and services popular with guests</Header>
                    <Label>
                        guests are most often looking for exactly these amenities and services.
                    </Label>
                    {
                        facilitiesOptions.map((facility, i) => (
                            <Segment key={i} compact className="property_services_tab-checkbox-segment">
                                <Checkbox onChange={handleFacilities} value={facility.value} checked={facilities.includes(facility.value)} label={facility.text} />
                            </Segment>
                        ))
                    }
                </Segment>
            </Container>

            <Button fluid primary className="property_services_tab-continue-btn" disabled={props.submitting}>Continue</Button>
        </form>
    )
};

export default reduxForm({
    form: "paymentTab"
})(TabForm);