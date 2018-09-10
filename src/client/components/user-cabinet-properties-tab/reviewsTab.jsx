import React, { Fragment } from "react";
import { Card, Header, Message, Segment } from "semantic-ui-react";
import ReviewItem from "./reviewItem";
import "./index.scss";

export class ReviewsTab extends React.Component {
    getReviewsItems = property => {
        return property.reviews.map((review, index) => {
            return <ReviewItem key={index} property={property} {...review} />;
        });
    };

    render() {
        const { property } = this.props;

        return (
            <Segment className="reviews-segment">
                <Header as="h2">Property reviews</Header>
                <Card.Group itemsPerRow={4}>
                    {!property.reviews.length
                        ? "Property dont have review :("
                        : this.getReviewsItems(property)}
                </Card.Group>
            </Segment>
        );
    }
}
