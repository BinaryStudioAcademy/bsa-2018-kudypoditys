import React, {Component} from "react";
import { Container } from "semantic-ui-react";
import "./index.scss";
import TabForm from './servicesTabForm';
import {connect} from "react-redux";
import {mapStateToProps, mapDispatchToProps} from "client/components/property-services-tab/container";
import * as staticData from "./staticData";

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



    handleContinue = () => {
        this.props.updateTab({
            activeIndex: 3
        });
    };

    render() {
        const formProps = {
            internet: this.props.internet,
            internetFee: this.props.internetFee,
            parking: this.props.parking,
            languages: this.props.languages,
            facilities: this.props.facilities,
            parkingOptions: staticData.parkingOptions,
            languagesOptions: staticData.languages,
            facilitiesOptions: staticData.facilities
        };
        return (
            <Container className="property_services_tab-wrapper">
                <TabForm {...formProps} handleChange={this.handleChange} handleParking={this.handleParking}
                         handleLanguages={this.handleLanguages} handleFacilities={this.handleFacilities}
                         onSubmit={this.handleContinue}/>
            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertyServicesTab);
