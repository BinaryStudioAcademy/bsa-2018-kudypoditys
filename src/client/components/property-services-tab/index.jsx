import React, { Component } from "react";
import { Container, Header, Segment, Input, Dropdown, Divider, Radio, Label, Button, Icon, Checkbox } from "semantic-ui-react";
import "./index.scss";

import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "client/components/property-services-tab/container";

export class PropertyServicesTab extends Component {

    handleChange = (e, { name, value }) => {
      this.props.updateTab({ [name]: value });
    };

    handleParking = (e, { name, value }) => {
        this.props.updateTab({
            parking: {
                ...this.props.parking,
                [name]: value
            }
        })
    };

    handleLanguages = (e, { name, value }) => {
        this.props.updateTab({
            languages: value
        })
    };

    handleFacilities = (e, { name, value }) => {
        !this.props.facilities.includes(value) ?
        this.props.updateTab({
            facilities: [
                ...this.props.facilities,
                value
            ]
        })
        :
        this.props.updateTab({
            facilities: this.props.facilities.filter((facility) => facility !== value)
        });
    };

    parkingOptions = {
        providing: [
            { key: "1", text: "No", value: "none" },
            { key: "2", text: "Yes, non-free", value: "non_free" },
            { key: "3", text: "Yes, for free", value: "free" }
        ],
        type: [
            { key: "1", text: "Private", value: "private" },
            { key: "2", text: "Public", value: "public" }
        ],
        placement: [
            { key: "1", text: "On territory", value: "on_territory" },
            { key: "2", text: "Off territory", value: "off_territory" }
        ],
        booking: [
            { key: "1", text: "Need to book", value: "need" },
            { key: "2", text: "No need to book", value: "no_need" }
        ],
        priceForDay: ""
    };

    languages = [
        {key: "1", text: "Ukrainian", value: "ukrainian"},
        {key: "2", text: "Russian", value: "russian"},
        {key: "3", text: "English", value: "english"}
    ];

    facilities = [
        {key: "1", text: "Bar", value: "Bar"},
        {key: "2", text: "Sauna", value: "Sauna"},
        {key: "3", text: "Garden", value: "Garden"},
        {key: "4", text: "Terrace", value: "Terrace"},
        {key: "5", text: "Non-smoking rooms", value: "Non-smoking rooms"},
        {key: "6", text: "Family rooms", value: "Family rooms"},
        {key: "7", text: "Jacuzzi", value: "Jacuzzi"},
        {key: "8", text: "Air conditioning", value: "Air conditioning"},
        {key: "9", text: "Station charging electric vehicles", value: "Station charging electric vehicles"},
        {key: "10", text: "You can change electric vehicles", value: "You can change electric vehicles"},
        {key: "11", text: "Pool", value: "Pool"}
    ];

    render() {
        console.log(this.props);
        return (
            <Container className="property_services_tab-wrapper">
                <Header as="h2">
                    Services
                </Header>
                <Container className="property_services_tab-container">
                    <Segment className="property_services_tab-segment">
                        <Header as="h4">Internet</Header>
                        <p>Do you provide guests with Wi-Fi?</p>
                        <Segment compact className="property_services_tab-radio-segment">
                            <Radio name="internet" checked={this.props.internet === "free"} value="free" label="Yes, for free" onChange={this.handleChange}/>
                        </Segment>
                        <Segment compact className="property_services_tab-radio-segment">
                            <Radio name="internet" checked={this.props.internet === "additional"} value="additional" label="For additional fee" onChange={this.handleChange}/>
                        </Segment>
                        <Segment compact className="property_services_tab-radio-segment">
                            <Radio name="internet" checked={this.props.internet === "none"} value="none" label="No" onChange={this.handleChange}/>
                        </Segment>

                        {
                            this.props.internet === "additional" ?
                                <div className="property_services_tab-switched-segment">
                                    <p>How much (per day)?</p>
                                    <Input type="number" label="USD" placeholder="0" name="internetFee" onChange={this.handleChange} value={this.props.internetFee}/>
                                </div>
                                :
                                null
                        }
                    </Segment>
                    <Segment className="property_services_tab-segment">
                        <Header as="h4">Parking</Header>
                        <Label color="teal">
                            This information is especially important to those who travel by car.
                        </Label>
                        <div className="property_services_tab-parking">
                            <div>
                                <p>Is parking provided?</p>
                                <Dropdown name="providing" selection onChange={this.handleParking} value={this.props.parking.providing} options={this.parkingOptions.providing}/>
                            </div>
                            {
                                this.props.parking.providing !== "none" ?
                                    <React.Fragment>
                                        <div>
                                            <p>Type</p>
                                            <Dropdown name="type" onChange={this.handleParking} value={this.props.parking.type} selection options={this.parkingOptions.type} />
                                        </div>
                                        <div>
                                            <p>Placement</p>
                                            <Dropdown name="placement" onChange={this.handleParking} value={this.props.parking.placement} selection options={this.parkingOptions.placement} />
                                        </div>
                                        <div>
                                            <p>Booking</p>
                                            <Dropdown name="booking" onChange={this.handleParking} value={this.props.parking.booking} selection options={this.parkingOptions.booking} />
                                        </div>
                                        { this.props.parking.providing === "non_free" ? <Input placeholder="0.00" type="number" name="priceForDay" onChange={this.handleParking} label="USD" value={this.props.parking.priceForDay}/> : null }

                                    </React.Fragment>
                                : null
                            }
                        </div>
                    </Segment>
                    <Segment className="property_services_tab-segment">
                        <Header as="h4">Languages</Header>
                        <Label color="teal">
                            What languages do you or your staff speak?
                        </Label>
                        <Dropdown placeholder="Choose language(s)" selection name="language" value={this.props.languages} onChange={this.handleLanguages} multiple options={this.languages}/>
                    </Segment>
                    <Segment className="property_services_tab-segment">
                        <Header as="h4">Facilities and services popular with guests</Header>
                        <Label color="teal">
                            guests are most often looking for exactly these amenities and services.
                        </Label>
                        {
                            this.facilities.map((facility, i) => (
                                <Segment key={i} compact className="property_services_tab-checkbox-segment">
                                    <Checkbox onChange={this.handleFacilities} value={facility.value} checked={this.props.facilities.includes(facility.value)} label={facility.text} />
                                </Segment>
                            ))
                        }
                    </Segment>
                </Container>


            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertyServicesTab);