import React from 'react';
import {
    Header,
    Comment,
    Form,
    Button,
    Checkbox,
    Transition,
    Progress,
    Message,
    Icon,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './index.scss';
import ReviewForm from './addReviewForm';
import Review from './item';
import { mapStateToProps, mapDispatchToProps } from './container';
import {
    getPropReviewsArray,
    getPropToggler,
} from 'client/helpers/reviewToggler';
import {
    getGroupedArray,
    getAvgFromArray,
} from 'client/helpers/avgReviewRating';
import RatingBar from './ratingBar';
import Modal from '../modal';
import BookingForm from '../booking-form';

export class Reviews extends React.Component {
    toggleVisibility = () =>
        this.setState({
            visible: !this.state.visible,
        });

    constructor(props) {
        super(props);


        this.state = {
            visible: true,
            modalOpen: false
        };
    }

    // handleCheckbox = (e, {checked}) => this.setState({collapsed: checked});
    handleOpen = () => {
        this.setState({ modalOpen: true })
        console.log(this.state)
    }

    handleClose = () => {

        this.setState({ modalOpen: false })

    }


    render() {
        console.log(this.props);
        const { property, user, bookings } = this.props;
        let shouldRenderForm = false;
        const { visible } = this.state;

        const avgPropRatingArray = getGroupedArray(
                property.reviews,
                'avgReview',
            ),
            avgPropCleanliness = getGroupedArray(
                property.reviews,
                'Cleanliness',
            ),
            avgPropComfort = getGroupedArray(property.reviews, 'Comfort'),
            avgPropFacilities = getGroupedArray(property.reviews, 'Facilities'),
            avgPropPrice = getGroupedArray(property.reviews, 'Price'),
            avgPropLocation = getGroupedArray(property.reviews, 'Cleanliness');

        const avgCleanliness = getAvgFromArray(avgPropCleanliness),
            avgFacilities = getAvgFromArray(avgPropFacilities),
            avgComfort = getAvgFromArray(avgPropComfort),
            avgPrice = getAvgFromArray(avgPropPrice),
            avgLocation = getAvgFromArray(avgPropLocation),
            avgPropRating = getAvgFromArray(avgPropRatingArray);

        let legitArray = getPropReviewsArray(bookings);
        console.log(legitArray.length);

        if (legitArray.length > 0) {
            shouldRenderForm = getPropToggler(legitArray, property);
        }

        console.log(shouldRenderForm);
        // if (!reviewData.cons && !reviewData.pros) {
        //     shouldRenderComments = false;
        // }
        //
        // console.log(shouldRenderForm);
        return (
            <Comment.Group size="large" style={{ marginBottom: 20 }}>
                {/*<Checkbox defaultChecked label='Show reviews' />*/}
                <Message className="review_message">
                    100% verified reviews.
                    {shouldRenderForm ? (
                        <div className="reviews_add_review__container">
                            Recently you visited {property.name}. Would you like
                            to
                            <Modal
                                className="reviews_add_review__modal"
                                trigger={
                                    <div onClick={this.handleOpen} className="reviews_add_review_btn">
                                        add review?
                                    </div>
                                }
                                open={this.state.modalOpen}
                                // onClose={this.handleClose}
                                onClose={this.close}

                            >
                                <ReviewForm property={property} onFormClick={this.handleClose} />
                            </Modal>
                        </div>
                    ) : null}
                </Message>
                {property.reviews.length === 0 ? (
                    <div>
                        <Header
                            as="mytagаSOSNOOOOLEY"
                            dividing
                            style={{
                                color: '#465672',
                                borderBottomColor: '#465672',
                            }}
                        >
                            There are no reviews yet. Be the first to review{' '}
                            {property.name}
                        </Header>
                    </div>
                ) : (
                    <div className="reviews__container">
                        <RatingBar property={property} />

                        {property.reviews.map(review => (
                            <Review
                                key={review.createdAt}
                                reviewData={review}
                            />
                        ))}
                    </div>
                )}
            </Comment.Group>
        );
    }
}

// Reviews.propTypes = {
//     cityInfos: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             city: PropTypes.string.isRequired,
//             flagUrl: PropTypes.string.isRequired,
//             properties: PropTypes.number.isRequired,
//             avgPrice: PropTypes.number.isRequired,
//             pictureUrl: PropTypes.string.isRequired
//         })
//     ).isRequired
// };

Reviews.defaultProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Reviews);
