import React from "react";
import {
    Header,
    Form,
    Button,
    Checkbox,
    Transition,
    Icon,
    Modal
} from "semantic-ui-react";

import { connect } from "react-redux";
import RatingForm from "./rating";
import "./index.scss";
import {
    getReviewAvg,
    getGroupedArray,
    getAvgFromArray
} from "client/helpers/avgReviewRating";
import history from "client/history";
import { mapStateToProps, mapDispatchToProps } from "./container";

// import {Reviews} from "./index";

export class addReviewForm extends React.Component {
    state = {
        anon: false,
        visible: true
    };
    handleClose = () => {
        this.props.onFormClick();
    };
    handleAnon = (e, { checked }) => {
        this.setState({ anon: checked });
    };
    toggleVisibility = () =>
        this.setState({
            visible: !this.state.visible
        });
    handleChange = event => {
        let data = { [event.target.name]: event.target.value };

        this.props.updateReview(data);
    };
    handleRate = (e, { rating, maxRating, name }) => {
        this.props.updateRating({ [name]: rating });
    };
    handleSubmit = event => {
        const { user, property, reviewRating, pros, cons, userc } = this.props;
        const {
            Cleanliness,
            Price,
            Comfort,
            Facilities,
            Location
        } = this.props.reviewRating;
        const avg = getReviewAvg(reviewRating),
            avgPropRatingArray = getGroupedArray(property.reviews, "avgReview");

        avgPropRatingArray.push(avg);
        const avgProp = getAvgFromArray(avgPropRatingArray);

        if (!userc) {
            property.reviews.push({
                pros: pros,
                cons: cons,
                createdAt: new Date(),
                user: user,
                avgReview: avg
            });
        }
        this.props.submitReview({
            pros: pros,
            cons: cons,
            anon: this.state.anon,
            userId: user.id,
            propertyId: property.id,
            Cleanliness: Cleanliness,
            Price: Price,
            Comfort: Comfort,
            Facilities: Facilities,
            Location: Location,
            avgReview: avg
        });

        this.props.updateProperty({
            rating: avgProp,
            propertyId: property.id
        });
        history.push(`/property/${property.id}`);
        window.location.reload()

        // this.props.getProperty(property.id);
    };

    render() {
        const { visible } = this.state;
        const { property } = this.props;
        return (
            <Form reply onSubmit={this.handleSubmit}>
                <Transition visible={!visible} animation="fade" duration={1000}>
                    <div>
                        <Header
                            as="h3"
                            dividing
                            style={{
                                color: "#465672",
                                borderBottomColor: "#465672"
                            }}
                        >
                            Dear Traveler. Thank you for your review and for
                            choosing {property.name}.
                        </Header>
                        <Modal.Actions style={{ textAlight: "center" }}>
                            <div
                                className="reviews__close_btn"
                                onClick={this.handleClose}
                            >
                                <Icon name="checkmark" /> Got it
                            </div>
                        </Modal.Actions>
                    </div>
                </Transition>
                <Transition visible={visible} animation="scale" duration={500}>
                    <div>
                        <div
                            className="close_icon"
                            onClick={this.handleClose}
                        >
                            <Icon name="close" size="large" />Close
                        </div>
                        <RatingForm
                            onSelect={this.handleRate}
                            name={"Cleanliness"}
                        />
                        <RatingForm onSelect={this.handleRate} name={"Price"} />
                        <RatingForm
                            onSelect={this.handleRate}
                            name={"Comfort"}
                        />
                        <RatingForm
                            onSelect={this.handleRate}
                            name={"Facilities"}
                        />
                        <RatingForm
                            onSelect={this.handleRate}
                            name={"Location"}
                        />

                        <Header>
                            <Icon name="plus circle" color="green" /> Pros:
                        </Header>
                        <Form.TextArea
                            name={"pros"}
                            onChange={this.handleChange}
                        />
                        <Header>
                            <Icon name="minus circle" color="grey" /> Cons:
                        </Header>
                        <Form.TextArea
                            name={"cons"}
                            onChange={this.handleChange}
                        />
                        <Checkbox
                            label="Send anonymously"
                            onChange={this.handleAnon}
                        />
                        <div className="add_review__button">
                            <Button
                                primary
                                // color="teal"
                                fluid
                                content="Add review"
                                // labelPosition="center"
                                // icon=""
                                type="submit"
                                onClick={this.toggleVisibility}
                            />
                        </div>

                    </div>
                </Transition>
            </Form>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(addReviewForm);
