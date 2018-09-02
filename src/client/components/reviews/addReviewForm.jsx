import React from 'react';
import {
    Header,
    Comment,
    Form,
    Button,
    Checkbox,
    Transition,
    Rating, Icon,
} from 'semantic-ui-react';

import { connect } from 'react-redux';
import RatingForm from './rating';
import './index.scss';
import { getReviewAvg } from 'client/helpers/avgReviewRating';

import { mapStateToProps, mapDispatchToProps } from './container';

// import {Reviews} from "./index";

export class addReviewForm extends React.Component {
    state = {
        Cleanliness: this.props.Cleanliness,
        Comfort: this.props.Comfort,
        Facilities: this.props.Facilities,
        Price: this.props.Price,
        Location: this.props.Location,
    };

    handleChange = event => {
        let data = { [event.target.name]: event.target.value };

        this.props.updateReview(data);

    };
    handleRate = (e, { rating, maxRating, name }) => {

        this.props.updateRating({ [name]: rating });
        console.log(this.state);
    };
    handleSubmit = event => {

        const { content, user, property, reviewRating, pros, cons } = this.props;
        const {
            Cleanliness,
            Price,
            Comfort,
            Facilities,
            Location,
        } = this.props.reviewRating;
        const avg = getReviewAvg(reviewRating);
        property.reviews.push({
            pros: pros,
            cons: cons,
            createdAt: new Date(),
            user: user,
            avgReview: avg
        });


        this.props.submitReview({
            pros: pros,
            cons: cons,

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


        return (
            <Form reply onSubmit={this.handleSubmit}>
                <RatingForm onSelect={this.handleRate} name={'Cleanliness'} />
                <RatingForm onSelect={this.handleRate} name={'Price'} />
                <RatingForm onSelect={this.handleRate} name={'Comfort'} />
                <RatingForm onSelect={this.handleRate} name={'Facilities'} />
                <RatingForm onSelect={this.handleRate} name={'Location'} />

                <Header>
                    <Icon name="plus circle"/> Pros:
                </Header>
                <Form.TextArea name={"pros"}onChange={this.handleChange} />
                <Header>
                    <Icon name="minus circle"/>  Cons:
                </Header>
                <Form.TextArea name={"cons"}onChange={this.handleChange} />

                <Button
                    primary
                    color="teal"
                    fluid
                    content="Add review"
                    labelPosition="left"
                    icon="edit"
                    type="submit"
                    onClick={this.toggleVisibility}
                />
            </Form>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(addReviewForm);
