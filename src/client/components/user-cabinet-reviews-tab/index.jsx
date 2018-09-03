import React, { Fragment } from "react";
import { mapStateToProps, mapDispatchToProps } from "./container";
import { connect } from "react-redux";
import history from "client/history";
import { Container, Button, Header } from "semantic-ui-react";
export class ReviewsTab extends React.Component {
    componentWillMount() {
        this.props.getUserReviews();
    }

    render() {
        console.log(this.props);
        return <Button onClick={this.props.getUserReviews} />;
        // const { bookings, activeBooking } = this.props;
        // //console.log(JSON.stringify(bookings));
        // return activeBooking ? (
        //     <Container fluid>
        //         <BookingPage
        //             cancelBooking={this.props.cancelBooking}
        //             backToAllBookings={this.backToAllBookings}
        //             booking={activeBooking}
        //             images={this.getBookingImages(activeBooking)}
        //         />
        //     </Container>
        // ) : (
        //     <Container fluid className="bookings-container">
        //         {this.getBookings(bookings)}
        //     </Container>
        // );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReviewsTab);
