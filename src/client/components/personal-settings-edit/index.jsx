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

    handleSend = () => {
        this.props.sendSettings(this.props);
    };

    componentWillMount() {
        this.props.getUserSettings();
    }

    handleImageUpload(file) {
        this.props.uploadAvatar(file);
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
                    handleImageUpload={this.handleImageUpload}
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
