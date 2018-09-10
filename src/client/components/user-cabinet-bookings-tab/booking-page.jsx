import React from "react";
import {
    Container,
    Header,
    Image,
    Button,
    Modal,
    Icon,
    Table,
    Divider,
    Confirm
} from "semantic-ui-react";
import { Slider } from "../slider";
import moment from "moment";
import "./booking-page.scss";
import BasicMapWidget from "../basic-map-widget";
import {
    getGroupedArray,
    getAvgFromArray
} from "client/helpers/avgReviewRating";
import { PropertySummary } from "../property-summary";

export class BookingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { modalOpen: false };
    }

    cancelBooking = (event, booking) => {
        this.props.cancelBooking(booking);
    };
    render() {
        const { booking, images } = this.props;
        const { orderCode } = this.props.booking;
        const { room } = booking;
        const { property } = room;
        const dateIn = new Date(booking.dateIn),
            dateOut = new Date(booking.dateOut);
        const start = moment(dateIn);
        const end = moment(dateOut);
        const duration = moment.duration(end.diff(start));
        const days = Math.round(duration.asDays());
        const price = Number(room.price) * days;
        const avgPropRatingArray = getGroupedArray(
            property.reviews,
            "avgReview"
        );
        const avgPropRating = getAvgFromArray(avgPropRatingArray);
        const pStyle = { marginLeft: "10px", marginBottom: "7px" };

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
                <Divider />
                <div className="booking-property-wrp">
                    <div className="property-info">
                        <PropertySummary
                            rating={avgPropRating}
                            totalReviews={property.reviews.length}
                            property={property}
                        />
                        <p style={pStyle}>
                            <Icon name="phone" />
                            {room.property.contactPhone}
                        </p>
                        <p style={pStyle}>
                            <Icon name="calendar alternate" />
                            {moment(booking.dateIn).format("MMMM DD, YYYY") +
                                " - " +
                                moment(booking.dateOut).format("MMMM DD, YYYY")}
                        </p>
                        <p style={pStyle}>
                            <Icon name="bed" />
                            {room.roomType.name}
                        </p>
                        <p style={pStyle}>
                            <Icon name="barcode" />
                            {"Confirmation code: " + orderCode}
                        </p>
                        <Modal
                            open={this.state.modalOpen}
                            closeOnDimmerClick
                            trigger={
                                <Button
                                    negative
                                    centered
                                    style={{
                                        position: "relative",
                                        left: "50%",
                                        transform: "translateX(-50%)"
                                    }}
                                    content="Cancel this booking"
                                    onClick={() => {
                                        this.setState({ modalOpen: true });
                                    }}
                                />
                            }
                        >
                            <Modal.Header>Are you sure?</Modal.Header>
                            <Modal.Content>
                                <p>
                                    Do you really want to cancel your booking at{" "}
                                    {property.name}?
                                </p>
                            </Modal.Content>
                            <Modal.Actions>
                                <Button
                                    onClick={event =>
                                        this.cancelBooking(event, booking)
                                    }
                                    negative
                                >
                                    Yes
                                </Button>
                                <Button
                                    onClick={() => {
                                        this.setState({ modalOpen: false });
                                    }}
                                    positive
                                    content="No"
                                />
                            </Modal.Actions>
                        </Modal>
                    </div>
                </div>
                <div className="property-images">
                    <Slider pics={images} />
                </div>
            </Container>
        );
    }
}
