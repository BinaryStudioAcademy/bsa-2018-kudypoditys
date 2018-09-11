import React from "react";
import {
    Container,
    Button,
    Modal,
    Icon,
    Divider,
    Confirm
} from "semantic-ui-react";
import { Slider } from "../slider";
import moment from "moment";
import "./booking-page.scss";
// import BasicMapWidget from "../basic-map-widget";
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
    handleCancel = () => this.setState({ open: false });

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
        const pStyle = {
            marginLeft: "10px",
            lineHeight: "1.2",
            fontSize: "16px",
            marginBottom: "5px"
        };

        return (
            <Container>
                <div className="booking-page--back-section">
                    <div>
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
                    </div>
                    <Modal
                        closeIcon
                        closeOnDimmerClick
                        header="Are you sure?"
                        content={`Do you really want to cancel your booking at ${
                            property.name
                        }?`}
                        actions={[
                            {
                                key: "no",
                                negative: true,
                                content: "Yes",
                                onClick: event =>
                                    this.cancelBooking(event, booking)
                            },
                            { key: "no", content: "No", positive: true }
                        ]}
                        trigger={<Button negative>Cancel this booking</Button>}
                    />
                </div>
                <Divider />
                <div className="booking-property-wrp">
                    <div className="property-info">
                        <PropertySummary
                            rating={avgPropRating}
                            totalReviews={property.reviews.length}
                            property={property}
                            bookingPage
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
                        <p style={pStyle}>
                            <Icon name="dollar" />
                            {price}
                        </p>
                    </div>
                </div>
                <Confirm
                    open={this.state.open}
                    onCancel={this.handleCancel}
                    header="Cancel reservation"
                    content="Are you sure you want to cancel your reservation?"
                    onConfirm={event => this.handleConfirm(booking)}
                />
                <div className="property-images">
                    <Slider pics={images} />
                </div>
            </Container>
        );
    }
}
