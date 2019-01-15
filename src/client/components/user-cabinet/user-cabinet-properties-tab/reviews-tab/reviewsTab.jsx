import React from "react";
import { Card, Header, Segment } from "semantic-ui-react";
import ReviewItem from "./reviewItem";
import "../index.scss";

export class ReviewsTab extends React.Component {
    getReviewsItems = property => {
        return property.reviews.map((review, index) => {
            return <ReviewItem key={index} property={property} {...review} />;
        });
    };

    render() {
        const { property } = this.props;

        return (
            <div>
                {!property.reviews.length ? (
                    <Header
                        textAlign="center"
                        className="no-reviews"
                        style={{ margin: "20px" }}
                    >
                        Property doesn't have review.
                    </Header>
                ) : (
                    <Segment className="reviews-segment">
                        <Header as="h2">Property reviews</Header>
                        <Card.Group itemsPerRow={4}>
                            {this.getReviewsItems(property)}
                        </Card.Group>
                    </Segment>
                )}
            </div>
        );
    }
}
