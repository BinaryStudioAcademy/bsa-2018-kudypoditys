import React, { Fragment } from "react";
import { mapStateToProps, mapDispatchToProps } from "./container";
import { connect } from "react-redux";
import history from "client/history";
import {
    Button,
    Icon,
    Image,
    Item,
    Label,
    Card,
    Header,
    Message,
    Segment
} from "semantic-ui-react";
import ReviewItem from "./reviewItem";
import "./index.scss";

export class ReviewsTab extends React.Component {
    componentWillMount() {
        this.props.getUserReviews({ id: 1 });
    }

    getReviewsItems = reviews => {
        console.log(reviews);
        return reviews.map((review, index) => {
            return (
                <ReviewItem
                    key={index}
                    {...review}
                    // images={booking.room.property.images}
                    // booking={booking}
                    // viewBooking={() => this.viewBooking(booking)}
                />
            );
        });
    };

    render() {
        // <Button onClick={this.props.getUserReviews} />
        const { reviews } = this.props;

        return (
            <Segment className="reviews-segment">
                <Header as="h2">Your reviews</Header>
                <Message info>This is a list of your reviews.</Message>
                <Card.Group itemsPerRow={4}>
                    {reviews.length
                        ? this.getReviewsItems(reviews)
                        : "You dont have review :("}
                </Card.Group>
            </Segment>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReviewsTab);
