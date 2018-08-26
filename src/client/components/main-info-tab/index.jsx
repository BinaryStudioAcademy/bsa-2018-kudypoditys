import React, {Component,} from "react";
import {Header, Container, Grid, Rail, Sticky, Segment} from 'semantic-ui-react';
import RegistrationForm from './registeredForm';
import {connect} from "react-redux";
import {mapStateToProps, mapDispatchToProps} from "./container";


class TabRegistration extends Component {

    render() {
        const {userName} = this.props;
        return (
            <Grid width={13}>
                <Grid.Column width={10}>
                    <Container>
                        <Header as='h2'>Welcome {userName}!</Header>
                        <RegistrationForm onSubmit={this.props.createProperty}/>
                    </Container>
                </Grid.Column>
            </Grid>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TabRegistration);