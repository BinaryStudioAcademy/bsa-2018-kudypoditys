import React from "react";
import { Container, Grid, Image, Button } from "semantic-ui-react";
import "./booking.scss";

export class Booking extends React.Component {
    render() {
        const { image, booking } = this.props;
        return (
            <Container fluid className="booking-container">
                <Grid className="booking">
                    <Grid.Row className="booking-header">
                        <Grid.Column width={4} textAlign="left" />
                        <Grid.Column width={7}>
                            <h1>Info-column</h1>
                        </Grid.Column>
                        <Grid.Column width={5} floated="right">
                            <h1>Check-in-out column</h1>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row className="booking-footer" verticalAlign="bottom">
                        <Grid.Column width={4}>
                            <Image src={image} className="booking-image" />
                        </Grid.Column>

                        <Grid.Column width={12}>
                            <Button primary content="View booking" />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}
