import React, { Fragment } from "react";
import { mapStateToProps, mapDispatchToProps } from "./container";
import { connect } from "react-redux";
import history from "client/history";
import { Card, Header, Message, Segment } from "semantic-ui-react";
import ReviewItem from "./reviewItem";
import Review from "../reviews/item";
import "./index.scss";

export class ReviewsTab extends React.Component {
    getReviewsItems = reviews => {
        return reviews.map((review, index) => {
            return <ReviewItem key={index} {...review} />;
        });
    };

    componentWillMount() {
        this.props.getUserReviews({ id: this.props.user.id });
    }

    render() {
        const { reviews } = this.props;

        return (
            <Segment className="reviews-segment">
                <Header as="h2">Your reviews</Header>
                <Message info>This is a list of your reviews.</Message>
                {reviews ? (
                    !reviews.length ? (
                        <Header
                            textAlign="center"
                            style={{
                                margin: "25px"
                            }}
                        >
                            You do not have any reviews.
                        </Header>
                    ) : (
                        <Card.Group itemsPerRow={4}>
                            {this.getReviewsItems(reviews)}
                        </Card.Group>
                    )
                ) : null}
            </Segment>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReviewsTab);
