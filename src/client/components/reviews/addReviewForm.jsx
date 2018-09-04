import React from 'react';
import {
    Header,
    Comment,
    Form,
    Button,
    Checkbox,
    Transition,
    Rating,
    Icon,
} from 'semantic-ui-react';

import { connect } from 'react-redux';
import RatingForm from './rating';
import './index.scss';
import { getReviewAvg } from 'client/helpers/avgReviewRating';

import { mapStateToProps, mapDispatchToProps } from './container';

// import {Reviews} from "./index";

export class addReviewForm extends React.Component {
    state = {
        anon: false,
        visible: true,
    };
    handleAnon = (e, { checked }) => {
        this.setState({ anon: checked });
        console.log(this.state);
    };
    toggleVisibility = () =>
        this.setState({
            visible: !this.state.visible,
        });
    handleChange = event => {
        let data = { [event.target.name]: event.target.value };

        this.props.updateReview(data);
    };
    handleRate = (e, { rating, maxRating, name }) => {
        this.props.updateRating({ [name]: rating });
        console.log(this.state);
    };
    handleSubmit = event => {
        const { anon } = this.state;
        console.log(anon + ' ANAAOAOAOA');

        const { user, property, reviewRating, pros, cons, userc } = this.props;
        const {
            Cleanliness,
            Price,
            Comfort,
            Facilities,
            Location,
        } = this.props.reviewRating;
        const avg = getReviewAvg(reviewRating);

        if (!userc) {
        property.reviews.push({
            pros: pros,
            cons: cons,
            createdAt: new Date(),
            user: user,
            avgReview: avg,
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

            avgReview: avg,
        });
    };

    render() {
        const { anon } = this.state;
        const { visible } = this.state;
        console.log(this.props);
        return (
            <Form reply onSubmit={this.handleSubmit}>
                <Transition visible={!visible} animation="scale" duration={500}>
                    <Header as="h3" dividing>
                        Dear Traveler. Thank you for your review and for
                        choosing our hotel.
                    </Header>
                </Transition>
                <Transition visible={visible} animation="scale" duration={500}>
                    <div>
                        <RatingForm
                            onSelect={this.handleRate}
                            name={'Cleanliness'}
                        />
                        <RatingForm onSelect={this.handleRate} name={'Price'} />
                        <RatingForm
                            onSelect={this.handleRate}
                            name={'Comfort'}
                        />
                        <RatingForm
                            onSelect={this.handleRate}
                            name={'Facilities'}
                        />
                        <RatingForm
                            onSelect={this.handleRate}
                            name={'Location'}
                        />

                        <Header>
                            <Icon name="plus circle" color="green" /> Pros:
                        </Header>
                        <Form.TextArea
                            name={'pros'}
                            onChange={this.handleChange}
                        />
                        <Header>
                            <Icon name="minus circle" color="grey" /> Cons:
                        </Header>
                        <Form.TextArea
                            name={'cons'}
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
                                labelPosition="left"
                                icon="edit"
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
    mapDispatchToProps,
)(addReviewForm);
