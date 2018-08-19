
import React, { Component } from "react";
import { Header, Grid, Rail, Button, Sticky, Segment } from 'semantic-ui-react';
import CheckboxBedForm from './bedForm';
import CheckboxAmenitiesForm from './checkboxAmenitiesForm';
import ButtonTab from './buttonForm';
import { mapStateToProps, mapDispatchToProps } from './container';
import { connect } from 'react-redux';
import {  reduxForm, formValueSelector } from 'redux-form';



class AmenitiesTabRegistration extends Component {
    constructor() {
		super();
		this.state = {
			shown:false,
		};
	}
    toggleClick() {
		this.setState({
			shown: !this.state.shown
		});
	}
    state = {}

    handleContextRef = contextRef => this.setState({ contextRef })
    render() {

        let shown = {
			display: this.state.shown ? "block" : "none"
        };
       let buttonName = this.state.shown ? "Hide all amenities":"Show all amenities"
        const { contextRef } = this.state
            return (
            <Grid  width={13}>
                <Grid.Column width={10} >
                    <form onSubmit={this.props.handleSubmit}>
                        < CheckboxBedForm   />
                        <Header as='h3'>Amenities</Header>
                        Tell us about your amenities
                    <CheckboxAmenitiesForm />
                        <Button basic onClick={this.toggleClick.bind(this)}> {buttonName} </Button>
                        <div style={shown}><ButtonTab /></div>
                        <Button color='teal' fluid
                             type="submit">Continue</Button>
                    </form>
                </Grid.Column>
                <Grid.Column width={3}>
                    <Rail position='right' style={{ marginTop: '15px' }}>
                        <Sticky context={contextRef}>
                            <Segment secondary >
                                After you complete registration you'll be able to
                                 make changes to your listing before it goes live
                             </Segment>
                        </Sticky>
                    </Rail>
                </Grid.Column>
            </Grid>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'AmenitiesTabRegistrationForm'
})(AmenitiesTabRegistration))


