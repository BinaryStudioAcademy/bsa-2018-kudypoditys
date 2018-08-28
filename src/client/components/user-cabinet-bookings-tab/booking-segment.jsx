import React from "react";
import {
    Container,
    Segment,
    Grid,
    Image,
    Button,
    Header,
    Icon
} from "semantic-ui-react";
import "./booking-segment.scss";
import moment from "moment";

export class BookingSegment extends React.Component {
    viewBooking = (event, id) => {
        event.preventDefault();
        this.props.viewBooking(id);
    };

    render() {
        const { images, booking } = this.props;
        const dateIn = new Date(booking.dateIn),
            dateOut = new Date(booking.dateOut);

        const start = moment(dateIn);
        const end = moment(dateOut);
        const duration = moment.duration(end.diff(start));
        const days = Math.round(duration.asDays());
        const price = Number(booking.room.price) * days;
        return (
            <Segment className="booking-container">
                <Grid className="booking">
                    <Grid.Row className="booking-header">
                        <Grid.Column width={4} textAlign="left" />
                        <Grid.Column width={7} className="booking-info">
                            <Header as="h4">
                                {booking.room.property.name}
                            </Header>
                            <p className="booking-address">
                                <Icon name="map marker alternate" />
                                {booking.room.property.address}
                            </p>
                            <p className="booking-phone">
                                <Icon name="phone" />
                                {booking.room.property.contactPhone}
                            </p>
                            <p className="booking-price">
                                <Icon name="dollar sign" />
                                USD {price}
                            </p>
                        </Grid.Column>
                        <Grid.Column width={5} floated="right">
                            <Grid columns={2} divided>
                                <Grid.Column
                                    className="check-date"
                                    textAlign="center"
                                >
                                    <p>CHECK-IN</p>
                                    <Header as="h2">
                                        {moment(dateIn).format("MMM DD")}
                                    </Header>
                                    <p>{moment(dateIn).format("dddd, YYYY")}</p>
                                </Grid.Column>
                                <Grid.Column
                                    className="check-date"
                                    textAlign="center"
                                >
                                    <p>CHECK-OUT</p>
                                    <Header as="h2">
                                        {moment(dateOut).format("MMM DD")}
                                    </Header>
                                    <p>
                                        {moment(dateOut).format("dddd, YYYY")}
                                    </p>
                                </Grid.Column>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row className="booking-footer" verticalAlign="bottom">
                        <Grid.Column width={4}>
                            <Image
                                src={images[0].url}
                                className="booking-image"
                            />
                        </Grid.Column>

                        <Grid.Column width={12}>
                            <Button
                                primary
                                content="View booking"
                                onClick={event =>
                                    this.viewBooking(event, booking.id)
                                }
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        );
    }
}
