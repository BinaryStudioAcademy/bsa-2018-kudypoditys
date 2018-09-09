import React, { Fragment } from "react";
import { mapStateToProps, mapDispatchToProps } from "./container";
import { connect } from "react-redux";
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
import "./index.scss";
import { PropertyItem } from "./propertyItem";
import history from "client/history";

export class ReviewsTab extends React.Component {
    addPropertyClicked = () => {
        history.push("/add-property");
    };

    getPropertyItems = properties => {
        // console.log(properties);
        return properties.map((property, index) => {
            console.log("MAP =", property);
            return (
                <PropertyItem
                    {...property}
                    // key={index}
                    // {...review}
                    // images={booking.room.property.images}
                    // booking={booking}
                    // viewBooking={() => this.viewBooking(booking)}
                />
            );
        });
    };

    componentWillMount() {
        this.props.fetchUserInfo({ id: this.props.user.id });
    }

    render() {
        const { properties } = this.props;
        return (
            <Segment className="reviews-segment">
                <Header as="h2">Your properties</Header>
                <Message info>This is a list of your properties.</Message>
                <Button onClick={this.props.fetchUserInfo} />
                {!properties
                    ? "You dont have properties :("
                    : this.getPropertyItems(properties)}

                <Button
                    // className="property-page__add-button"
                    floated="right"
                    onClick={this.addPropertyClicked}
                >
                    Add property
                </Button>
            </Segment>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReviewsTab);
