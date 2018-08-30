import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import SettingsForm from "./settingsForm.jsx";
import * as staticData from "./staticData";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";
import "./index.scss";

export class EditPersonalSettings extends Component {
    handleSubmit = data => {
        console.log(data);
    };

    handleUpdate = data => {
        this.props.updateSettings(data);
    };

    handleSend = data => {
        this.props.sendSettings(data);
    };

    componentWillMount() {
        this.props.getUserSettings();
    }

    render() {
        const formProps = {
            dateOptions: staticData.dateOptions,
            countryOptions: staticData.countryOptions,
            paymentOptions: staticData.paymentOptions,
            smokingInRoomsOptions: staticData.smokingInRoomsOptions,
            starsOptions: staticData.starsOptions,
            currencyOptions: staticData.currencyOptions,
            appealOptions: staticData.appealOptions,
            //
            ...this.props
        };
        return (
            <Container fluid>
                <SettingsForm
                    {...formProps}
                    onSubmit={this.handleSubmit}
                    updateSettings={this.handleUpdate}
                    sendSettings={this.handleSend}
                />
            </Container>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditPersonalSettings);
