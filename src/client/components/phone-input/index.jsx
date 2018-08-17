import React from "react";
import { Dropdown, Input } from "semantic-ui-react";
import countries from "./countriesInfo.js";
import "./index.scss";

class PhoneInput extends React.Component {
    handleNumberChanged = (event, value) => {
        this.props.handleNumberChanged(value.value);
    };

    handlePrefixChanged = (event, value) => {
        this.props.handlePrefixChanged(value.value);
    };

    render() {
        return (
            <Input
                action={
                    <Dropdown
                        className="phone-dropdown"
                        compact={true}
                        left="true"
                        button
                        basic
                        floating
                        selection
                        defaultValue="+380"
                        options={countries}
                        onChange={this.handlePrefixChanged}
                    />
                }
                actionPosition={"left"}
                placeholder="Phone"
                onChange={this.handleNumberChanged}
                className={this.props.error ? "error" : ""}
            />
        );
    }
}

export default PhoneInput;
