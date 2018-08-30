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
import BasicMapWidget from "../basic-map-widget";
import Modal from "../modal";

export class BookingPage extends React.Component {
    render() {
        const { booking, images } = this.props;
        console.log(JSON.stringify(images));
        const dateIn = new Date(booking.dateIn),
            dateOut = new Date(booking.dateOut);
        const start = moment(dateIn);
        const end = moment(dateOut);
        const duration = moment.duration(end.diff(start));
        const days = Math.round(duration.asDays());
        const price = Number(booking.room.price) * days;
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
                                <Table.Cell>
                                    {booking.room.roomType.name}
                                </Table.Cell>
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
                        </Table.Body>
                    </Table>

                    <div className="property-info">
                        <Header
                            textAlign="center"
                            className="property-name"
                            as="h2"
                        >
                            <a style={{ color: "#465672", cursor: "pointer" }}>
                                {booking.room.property.name}
                            </a>
                        </Header>
                        <p>
                            <Icon name="map marker alternate" />
                            {booking.room.property.address}
                            {" –"}
                            <Modal
                                trigger={
                                    <a
                                        style={{
                                            cursor: "pointer",
                                            marginLeft: "5px"
                                        }}
                                    >
                                        Show on map
                                    </a>
                                }
                            >
                                <BasicMapWidget
                                    location={booking.room.property.coordinates}
                                    rounded
                                    centered
                                />
                            </Modal>
                        </p>
                        <p>
                            <Icon name="phone" />
                            {booking.room.property.contactPhone}
                        </p>
                        <p>{booking.room.property.description}</p>
                    </div>
                </div>
                <div className="property-images">
                    <Slider pics={images} />
                </div>
            </Container>
        );
    }
}
