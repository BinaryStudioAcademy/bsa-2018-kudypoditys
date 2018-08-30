import React from "react";
import {
    Container,
    Header,
    Grid,
    Image,
    Button,
    Icon,
    Table
} from "semantic-ui-react";
import { Slider } from "../slider";
import moment from "moment";
import "./booking-page.scss";
import MapWidgetModal from "client/components/map-widget-modal";

export class BookingPage extends React.Component {
    cancelBooking = (event, booking) => {
        this.props.cancelBooking(booking);
    };
    render() {
        const { booking, images } = this.props;
        const { room } = booking;
        const dateIn = new Date(booking.dateIn),
            dateOut = new Date(booking.dateOut);
        const start = moment(dateIn);
        const end = moment(dateOut);
        const duration = moment.duration(end.diff(start));
        const days = Math.round(duration.asDays());
        const price = Number(room.price) * days;
        return (
            <Container>
                <a
                    onClick={this.props.backToAllBookings}
                    style={{
                        cursor: "pointer",
                        color: "#465672"
                    }}
                >
                    <span>
                        <Icon name="triangle left" />
                        Back to all bookings
                    </span>
                </a>

                <div className="property-images">
                    <Slider pics={images} />
                </div>

                <div className="booking-page-top-section">
                    <Table collapsing celled className="booking-info">
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell
                                    colSpan={2}
                                    textAlign="center"
                                >
                                    Booking Info
                                </Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>
                                    <Icon name="bed" />
                                    Room
                                </Table.Cell>
                                <Table.Cell>{room.roomType.name}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <Icon name="calendar alternate" />
                                    Check-in
                                </Table.Cell>
                                <Table.Cell>
                                    {moment(booking.dateIn).format(
                                        "ddd, MMMM DD"
                                    )}
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <Icon name="calendar alternate" />
                                    Check-out
                                </Table.Cell>
                                <Table.Cell>
                                    {moment(booking.dateOut).format(
                                        "ddd, MMMM DD"
                                    )}
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <Icon name="dollar" />
                                    Total
                                </Table.Cell>
                                <Table.Cell>{price} USD</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell colSpan="2">
                                    <Button
                                        negative
                                        fluid
                                        onClick={event =>
                                            this.cancelBooking(event, booking)
                                        }
                                    >
                                        Cancel your booking
                                    </Button>
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>

                    <div className="property-info">
                        <Header
                            textAlign="center"
                            className="property-name"
                            as="h2"
                        >
                            <a style={{ color: "#465672", cursor: "pointer" }}>
                                {room.property.name}
                            </a>
                        </Header>
                        <p>
                            <Icon name="map marker alternate" />
                            {room.property.address}
                            {" –"}
                            <MapWidgetModal
                                properties={[
                                    {
                                        price: room.price,
                                        name: room.property.name,
                                        latitude: room.property.coordinates.lat,
                                        longitude:
                                            room.property.coordinates.lng,
                                        imageSrc: room.property.images[0].url,
                                        address: room.property.address,
                                        rating: room.property.rating
                                    }
                                ]}
                                startPosition={{
                                    latitude: 49.837089,
                                    longitude: 24.021161
                                }}
                                zoom={13}
                                controlEnable={true}
                                buttonClass={"searchMapButton"}
                            />
                        </p>
                        <p>
                            <Icon name="phone" />
                            {room.property.contactPhone}
                        </p>
                        <p>{room.property.description}</p>
                    </div>
                </div>
            </Container>
        );
    }
}
