import React from "react";
import {
    Container,
    Button,
    Modal,
    Icon,
    Divider,
    Confirm
} from "semantic-ui-react";
import { connect } from "react-redux";
import { Slider } from "../../slider";
import moment from "moment";
import "./booking-page.scss";
import {
    getGroupedArray,
    getAvgFromArray
} from "client/helpers/avgReviewRating";
import { PropertySummary } from "../../property/property-summary";
import history from "client/history";
import { convert } from "../../../helpers/convertCurrency";

class BookingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { modalOpen: false };
    }

    cancelBooking = (event, booking) => {
        this.props.cancelBooking(booking);
    };
    handleCancel = () => this.setState({ open: false });

    render() {
        const { booking, images, currency } = this.props;
        const { orderCode } = this.props.booking;
        const { room } = booking;
        const { property } = room;
        const price = Number(booking.priceTotal);
        const avgPropRatingArray = getGroupedArray(
            property.reviews,
            "avgReview"
        );
        const roomsCount = (booking.roomsCount > 1)? `x${booking.roomsCount} `:"";
        const avgPropRating = getAvgFromArray(avgPropRatingArray);
        const pStyle = {
            marginLeft: "10px",
            lineHeight: "1.2",
            fontSize: "16px",
            marginBottom: "5px"
        };

        const propCurrency = booking.room.property.currency;
        const roomPrice = convert(propCurrency.code, price, currency.code);

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
                            onHeaderClick={() => {
                                history.push(`/property/${property.id}`);
                            }}
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
                            {roomsCount}{room.roomType.name}
                        </p>
                        <p style={pStyle}>
                            <Icon name="barcode" />
                            {"Confirmation code: " + orderCode}
                        </p>
                        <p style={pStyle}>
                            <Icon name="dollar" />
                            {currency.code} {roomPrice}
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

export default connect(state => ({
    currency: state.header.selectedCurrency
}))(BookingPage);