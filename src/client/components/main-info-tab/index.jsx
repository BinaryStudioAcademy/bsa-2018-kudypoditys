import React, { Component, Fragment } from "react";
//import { connect } from "react-redux";
import { Segment,Header } from "semantic-ui-react";
import FormTextInput from '../input-form/index';


class TabRegistration extends Component {

    render() {
        return (
            <Fragment>
                 <Header as='h2'>Welcome Elvira!</Header>
                 Start by telling us your property's name, contact details, and address.
                <Segment>What's the name of your property?
                    <FormTextInput/>

                </Segment>
                <Segment>What are the contact details for this property?</Segment>
                <Segment>Channel Manager </Segment>
                <Segment>Where's your property located?</Segment>
                <Segment>Did we contact you?</Segment>
            </Fragment>
        )
    }
}

export default
    TabRegistration;
