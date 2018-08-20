import React, {Component} from "react";
import {
    Container,
    Header,
    Segment,
    Input,
    Dropdown,
    Divider,
    Radio,
    Label,
    Button,
    Icon,
    Checkbox
} from "semantic-ui-react";
import "./index.scss";

import TabForm from './servicesTabForm';

import {connect} from "react-redux";
import {mapStateToProps, mapDispatchToProps} from "client/components/property-services-tab/container";


export class PropertyServicesTab extends Component {

    handleChange = (e, {name, value}) => {
        this.props.updateTab({[name]: value});
    };

    handleParking = (e, {name, value}) => {
        console.log(e, name, value);
        this.props.updateTab({
            parking: {
                ...this.props.parking,
                [name]: value
            }
        })
    };

    handleLanguages = (e, {name, value}) => {
        this.props.updateTab({
            languages: value
        })
    };

    handleFacilities = (e, {name, value}) => {
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
            {key: "1", text: "No", value: "none"},
            {key: "2", text: "Yes, non-free", value: "non_free"},
            {key: "3", text: "Yes, for free", value: "free"}
        ],
        type: [
            {key: "1", text: "Private", value: "private"},
            {key: "2", text: "Public", value: "public"}
        ],
        placement: [
            {key: "1", text: "On territory", value: "on_territory"},
            {key: "2", text: "Off territory", value: "off_territory"}
        ],
        booking: [
            {key: "1", text: "Need to book", value: "need"},
            {key: "2", text: "No need to book", value: "no_need"}
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

    handleContinue = () => {
        // this.props.continue();
    };

    render() {
        const {
            internet,
            internetFee,
            parking,
            languages,
            facilities
        } = this.props;
        const formProps = {
            internet,
            internetFee,
            parking,
            languages,
            facilities,
            parkingOptions: this.parkingOptions,
            languagesOptions: this.languages,
            facilitiesOptions: this.facilities
        };
        return (
            <Container className="property_services_tab-wrapper">
                <Header as="h2">
                    Services
                </Header>
                <TabForm {...formProps} handleChange={this.handleChange} handleParking={this.handleParking}
                         handleLanguages={this.handleLanguages} handleFacilities={this.handleFacilities}
                         onSubmit={this.handleContinue}/>
            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertyServicesTab);
