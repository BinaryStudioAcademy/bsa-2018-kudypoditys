import React from "react";
import {Container, Header, Grid, Image, Button} from "semantic-ui-react";
import {Slider} from "../slider";
import moment from "moment";

export class BookingPage extends React.Component {
    render() {
        const {booking, images} = this.props;
        const dateIn = new Date(booking.dateIn),
            dateOut = new Date(booking.dateOut);
        const start = moment(dateIn);
        const end = moment(dateOut);
        const duration = moment.duration(end.diff(start));
        const days = Math.round(duration.asDays());
        const price = Number(booking.room.price) * days;
        return (
            <Container>
                <Button
                    content="All Bookings"
                    icon="arrow left"
                    labelPosition="left"
                    primary
                    onClick={this.props.backToAllBookings}
                />
                <Header className="property-name" as="h2">
                    {booking.room.property.name}
                </Header>
                <Grid>
                    <Grid.Row>
                        Address: {booking.room.property.address}
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={6}>
                            Room: {booking.room.roomType.name}
                        </Grid.Column>
                        <Grid.Column width={6}>Price: USD {price}</Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={6}>
                            Check-in:{" "}
                            {moment(booking.dateIn).format("MMMM Do YYYY")}
                        </Grid.Column>
                        <Grid.Column width={6}>
                            Check-out:{" "}
                            {moment(booking.dateOut).format("MMMM Do YYYY")}
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Image src={images[0]}/>
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}
