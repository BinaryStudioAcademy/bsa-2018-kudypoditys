import React from 'react';
import {
    Header,
    Comment,
    Form,
    Button,
    Checkbox,
    Transition,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './index.scss';
import ReviewForm from './addReviewForm'
import Review from './item';
import { mapStateToProps, mapDispatchToProps } from './container';

export class Reviews extends React.Component {
    constructor(props) {
        super(props);
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            visible: true,
        };
    }


    toggleVisibility = () =>
        this.setState({
            visible: !this.state.visible,
        });


    // handleCheckbox = (e, {checked}) => this.setState({collapsed: checked});

    render() {
        console.log(this.props);
        const { property, user } = this.props;
        const { visible } = this.state;

        return (
            <Comment.Group size="large" style={{ marginBottom: 20 }}>
                {/*<Checkbox defaultChecked label='Show reviews' />*/}
                {property.reviews.length === 0 ? (
                    <Header as="h3" dividing>
                        There are no reviews yet. Be the first to review{' '}
                        {property.name}
                    </Header>
                ) : (
                    property.reviews.map(review => (
                        <Review key={review.createdAt} reviewData={review}/>
                    ))
                )}{' '}
                <Transition visible={!visible} animation="scale" duration={500}>
                    <Header as="h3" dividing>
                        Dear Traveler. Thank you for your review and for
                        choosing our hotel.
                    </Header>
                </Transition>
                {user === undefined ? (
                    <Header as="h3" dividing>
                        Dear Traveler, You must be logged in to post a review.
                    </Header>
                ) : (
                    <Transition
                        visible={visible}
                        animation="scale"
                        duration={500}
                    >
                       <ReviewForm property={property}  />
                    </Transition>
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
