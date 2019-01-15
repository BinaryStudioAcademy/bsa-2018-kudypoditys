import React, { Component } from "react";
import { Header, Grid, Button } from 'semantic-ui-react';
import CheckboxBedForm from './bedForm';
import CheckboxAmenitiesForm from './checkboxAmenitiesForm';
import ButtonTab from './buttonForm';
import { mapStateToProps, mapDispatchToProps } from './container';
import { connect } from 'react-redux';
import {  reduxForm } from 'redux-form';

class AmenitiesTabRegistration extends Component {
    constructor() {
        super();
        this.state = {
            shown: false,
        };
    }

    toggleClick() {
        this.setState({
            shown: !this.state.shown
        });
    }

    render() {

        let shown = {
            display: this.state.shown ? "block" : "none"
        };
        let buttonName = this.state.shown ? "Hide all amenities" : "Show all amenities"
        return (
            <Grid width={13}>
                <Grid.Column width={10}>
                    <form onSubmit={this.props.handleSubmit}>
                        < CheckboxBedForm/>
                        <Header as='h3'>Amenities</Header>
                        Tell us about your amenities
                        <CheckboxAmenitiesForm/>
                        <Button basic onClick={this.toggleClick.bind(this)}> {buttonName} </Button>
                        <div style={shown}><ButtonTab/></div>
                        <Button color='teal' fluid
                                type="submit"
                        >Continue</Button>
                    </form>
                </Grid.Column>
            </Grid>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'AmenitiesTabRegistrationForm'
})(AmenitiesTabRegistration))


