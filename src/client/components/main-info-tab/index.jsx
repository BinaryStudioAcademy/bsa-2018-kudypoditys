import React, { Component,} from "react";
import { Header, Container, Grid, Rail, Sticky, Segment } from 'semantic-ui-react';
import RegistrationForm from './registeredForm';
import {connect} from "react-redux";
import {mapStateToProps, mapDispatchToProps} from "./container";


class TabRegistration extends Component {
    state = {}
    handleContextRef = contextRef => this.setState({ contextRef })

    render() {
        const {name } = this.props;
        const { contextRef } = this.state
        return (
            <Grid width={13}>
                <Grid.Column width={10}>
                    <Container >
                        <Header as='h2'>Welcome {name}!</Header>
                        <RegistrationForm onSubmit={this.props.createProperty}/>
                    </Container>
                </Grid.Column>
                <Grid.Column width={3}>
                    <Rail position='right' style={{marginTop: '50px'}}>
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TabRegistration);