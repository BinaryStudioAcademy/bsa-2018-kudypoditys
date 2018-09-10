import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Dropdown, Label } from "semantic-ui-react";
import renderField from "client/components/input-form/renderField";

export class AddressForm extends Component {
    handleChange = (e, { name, value }) => {
        this.setState({
            [name]: value
        });
    };

    constructor(props) {
        super(props);
        this.state = {
            address: this.props.address,
            city: this.props.city,
            country: this.props.country,
            postcode: this.props.postcode
        };
    }

    render() {
        const { address, city, country, postcode } = this.state;
        const { countryOptions } = this.props;
        return (
            <form onSubmit={this.props.handleSubmit}>
                <div className="personal_settings-adding-address">
                    <p>Address</p>
                    <Field
                        component={renderField}
                        name="address"
                        label="Address"
                        type="text"
                        val={address}
                        onChange={e => this.handleChange(e, e.target)}
                    />
                    <p>City</p>
                    <Field
                        component={renderField}
                        name="city"
                        label="City"
                        type="text"
                        val={city}
                        onChange={e => this.handleChange(e, e.target)}
                    />
                    <p>Country / Territory</p>
                    <Dropdown
                        fluid
                        selection
                        defaultValue={country}
                        options={countryOptions}
                        onChange={e => this.handleChange(e, e.target)}
                    />
                    <p>Postcode</p>
                    <Field
                        component={renderField}
                        name="postcode"
                        label="Postcode"
                        type="number"
                        value={postcode}
                        onChange={e => this.handleChange(e, e.target)}
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
                                this.addingItem("addingAddress", false)
                            }
                            basic
                            className="personal_settings-btn"
                        />
                    </div>
                </div>
            </form>
        );
    }
}

export default reduxForm({
    form: "personalSettingsAddressForm"
})(AddressForm);
