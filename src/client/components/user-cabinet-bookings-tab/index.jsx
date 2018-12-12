import React, { Fragment } from "react";
import "./index.scss";
import BookingSegment from "./booking-segment";
import { Container, Button, Header, Message, Divider } from "semantic-ui-react";
import BookingPage from "./booking-page";
import { mapStateToProps, mapDispatchToProps } from "./container";
import { connect } from "react-redux";
import history from "client/history";

export class BookingsTab extends React.Component {
    bookNowClicked = () => {
        history.push("/");
    };
    viewBooking = booking => {
        this.props.chooseBooking(booking);
    };
    backToAllBookings = () => {
        this.props.unchooseBooking();
    };
    getBookings = bookings => {
        if (!this.props.bookings.length)
            return (
                <Fragment>
                    <div style={{ textAlign: "center" }}>
                        <Header>You do not have active bookings.</Header>
                        <Button
                            content="Book now!"
                            primary
                            onClick={this.bookNowClicked}
                        />
                    </div>
                </Fragment>
            );
        return bookings.map((booking, index) => {
            return (
                <Fragment>
                    <BookingSegment
                        key={index}
                        images={booking.room.property.images}
                        booking={booking}
                        viewBooking={() => this.viewBooking(booking)}
                    />
                    <Divider />
                </Fragment>
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

    componentWillMount() {
        this.props.getBookings();
    }

    render() {
        const { bookings, activeBooking } = this.props;
        console.log(this.props);
        //console.log(JSON.stringify(bookings));
        return activeBooking ? (
            <Container fluid>
                <BookingPage
                    cancelBooking={this.props.cancelBooking}
                    backToAllBookings={this.backToAllBookings}
                    booking={activeBooking}
                    images={this.getBookingImages(activeBooking)}
                />
            </Container>
        ) : (
                <Container fluid className="bookings-container">
                    <Header as="h2">Your active bookings</Header>
                    <Message info>
                        This list of your bookings, you can see a detailed
                        description by clicking on the button.
                </Message>
                    <Divider section />
                    {this.getBookings(bookings)}
                </Container>
            );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookingsTab);
