
import React, { Component,} from "react";
import { Header, Container, Grid, Rail, Sticky, Segment } from 'semantic-ui-react';
import CheckboxBadForm from './badForm';
import CheckboxAmenitiesForm from './checkboxAmenitiesForm';



class AmenitiesTabRegistration extends Component {
    state = {}
    handleContextRef = contextRef => this.setState({ contextRef })
    render() {
        const { contextRef } = this.state
        return (
            <Grid centered columns={2}>
                <Grid.Column>
                    <Container >
                        <Header />
                        <Header as='h2'>Amenities</Header>
                        You're almost done! We just need a few more details about the extra bed options you provide,
                         plus any amenities or specific features and services available.
                     </Container>
                    < CheckboxBadForm />
                    <Header as='h4'>Amenities</Header>
                    Tell us about your amenities
                    <CheckboxAmenitiesForm />

                    <Rail position='right' style={{ marginTop: '120px' }}>
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
export default  AmenitiesTabRegistration;