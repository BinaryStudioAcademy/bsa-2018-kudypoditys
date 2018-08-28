import React from "react";
import "./index.scss";
import { BookingSegment } from "./booking-segment";
import { Container } from "semantic-ui-react";
import { BookingPage } from "./booking-page";
import { mapStateToProps, mapDispatchToProps } from "./container";
import { connect } from "react-redux";

export class BookingsTab extends React.Component {
    componentWillMount() {
        this.props.getBookings();
    }

    viewBooking = booking => {
        this.props.chooseBooking(booking);
    };

    backToAllBookings = () => {
        this.props.unchooseBooking();
    };

    getBookings = bookings => {
        if (!this.props.bookings) return null;
        return bookings.map((booking, index) => {
            return (
                <BookingSegment
                    key={index}
                    images={booking.room.property.images}
                    booking={booking}
                    viewBooking={() => this.viewBooking(booking)}
                />
            );
        });
    };

    getBookingImages = booking => {
        let images = [];
        for (let i = 0; i < booking.room.property.images.length; i++) {
            images.push(booking.room.property.images[i].url);
        }
        return images;
    };

    render() {
        const { bookings, activeBooking } = this.props;
        //console.log(JSON.stringify(bookings));
        return activeBooking ? (
            <Container fluid>
                <BookingPage
                    backToAllBookings={this.backToAllBookings}
                    booking={activeBooking}
                    images={this.getBookingImages(activeBooking)}
                />
            </Container>
        ) : (
            <Container fluid className="bookings-container">
                {this.getBookings(bookings)}
            </Container>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookingsTab);
