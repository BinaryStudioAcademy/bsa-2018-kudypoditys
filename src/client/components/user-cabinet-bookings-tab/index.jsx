import React from "react";
import "./index.scss";
import { BookingSegment } from "./booking-segment";
import { Container } from "semantic-ui-react";

export class BookingsTab extends React.Component {
    viewBooking = id => {
        console.log("id: " + id);
    };

    getBookings() {
        return this.props.bookings.map((booking, index) => {
            return (
                <BookingSegment
                    key={index}
                    image="https://www.publicdomainpictures.net/pictures/10000/velka/947-1262818585EUqs.jpg"
                    booking={booking}
                    viewBooking={() => this.viewBooking(booking.id)}
                />
            );
        });
    }

    render() {
        const { bookings } = this.props;
        if (bookings)
            return (
                <Container fluid className="bookings-container">
                    {this.getBookings()}
                </Container>
            );
        else return null;
    }
}
