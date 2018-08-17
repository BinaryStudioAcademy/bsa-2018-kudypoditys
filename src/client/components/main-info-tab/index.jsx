import React, {Component,} from "react";
import {Header, Container, Grid, Rail, Sticky, Segment} from 'semantic-ui-react';
import RegistrationForm from './registeredForm';


class TabRegistration extends Component {
    state = {}
    handleContextRef = contextRef => this.setState({contextRef})

    render() {
        const {name} = this.props;
        const {contextRef} = this.state
        return (
            <Grid centered columns={2}>
                <Grid.Column>
                    <Container>
                        <Header/>
                        <Header as='h2'>Welcome {name}!</Header>
                        Start by telling us your property's name, contact details, and address.
                        <RegistrationForm/>
                    </Container>
                    <Rail position='right' style={{marginTop: '120px'}}>
                        <Sticky context={contextRef}>
                            <Segment secondary>
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

export default TabRegistration;
