import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import SettingsForm from "./settingsForm.jsx";
import * as staticData from "./staticData";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";


import "./index.scss";

export class EditPersonalSettings extends Component {
    componentDidMount() {
        this.props.getCurrencies();
    }

    handleUpdate = data => {
        this.props.updateSettings(data);
    };

    handleSend = () => {
        this.props.sendSettings(this.props);
    };

    handleImageUpload(file) {
        this.props.uploadAvatar(file);
    }

    render() {
        const { currencies, selectedCurrency, onCurrencyChange } = this.props;


        const formProps = {
            countryOptions: staticData.countryOptions,
            paymentOptions: staticData.paymentOptions,
            currencyOptions: currencies.map(x => ({ key: x.id, value: x.id, text: x.code })),
            selectedCurrency: selectedCurrency,
            appealOptions: staticData.appealOptions,
            currencies,
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
                    onCurrencyChange={onCurrencyChange}
                />
            </Container>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditPersonalSettings);
