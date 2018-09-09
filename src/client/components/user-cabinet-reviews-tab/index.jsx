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
import Review from "../reviews/item";
import "./index.scss";

export class ReviewsTab extends React.Component {
    getReviewsItems = reviews => {
        console.log(reviews);
        return reviews.map((review, index) => {
            return <ReviewItem key={index} {...review} />;
        });
    };

    componentWillMount() {
        console.log(this.props);
        this.props.getUserReviews({ id: this.props.user.id });
    }

    render() {
        const { reviews } = this.props;

        return (
            <Segment className="reviews-segment">
                <Header as="h2">Your reviews</Header>
                <Message info>This is a list of your reviews.</Message>
                <Card.Group itemsPerRow={4}>
                    {!reviews
                        ? "You dont have review :("
                        : this.getReviewsItems(reviews)}
                </Card.Group>
            </Segment>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReviewsTab);
