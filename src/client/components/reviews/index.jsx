import React from "react";
import {
    Header,
    Comment,
    Message,
} from "semantic-ui-react";
import { connect } from "react-redux";
import "./index.scss";
import ReviewForm from "./addReviewForm";
import Review from "./item";
import { mapStateToProps, mapDispatchToProps } from "./container";
import {
    getPropReviewsArray,
    getPropToggler,
    getPropToggler2
} from "../../helpers/reviewToggler";
import RatingBar from "./ratingBar";
import Modal from "../modal";

export class Reviews extends React.Component {

    toggleVisibility = () =>
        this.setState({
            visible: !this.state.visible
        });

    constructor(props) {
        super(props);

        this.state = {
            visible: true,
            modalOpen: false,
            reviewLeft: false
        };
    }

    // handleCheckbox = (e, {checked}) => this.setState({collapsed: checked});
    handleOpen = () => {
        this.setState({ modalOpen: true });
    };

    handleClose = () => {
        this.setState({ modalOpen: false });
    };

    render() {
        const { property, user, bookings, } = this.props;
        let shouldRenderForm = false;
        let reviewLeft = false;

        let legitArray = getPropReviewsArray(bookings);

        if (legitArray.length > 0 ) {
            shouldRenderForm = getPropToggler(legitArray, property, user);

        }

        if ( property.reviews.length && user) {
            reviewLeft = getPropToggler2(property, user)
        }

        return (
            <Comment.Group size="large" style={{ marginBottom: 20 }}>
                {/*<Checkbox defaultChecked label='Show reviews' />*/}
                {reviewLeft ? (<Message className="review_message">
                    <div className="reviews_add_review__container">Dear Traveler. Thank you for your review and for
                        choosing {property.name}.</div>

                </Message>) : (
                <Message className="review_message">
                    100% verified reviews.
                    {shouldRenderForm  ? (
                        <div className="reviews_add_review__container">
                            Recently you visited {property.name}.
                            <Modal
                                className="reviews_add_review__modal"
                                trigger={
                                    <div
                                        onClick={this.handleOpen}
                                        className="reviews_add_review_btn"
                                    >
                                        Add review
                                    </div>
                                }
                                open={this.state.modalOpen}
                                // onClose={this.handleClose}
                                closeOnDimmerClick={true}
                                // closeIcon
                                onClose={this.close}
                            >
                                <ReviewForm
                                    property={property}
                                    onFormClick={this.handleClose}
                                />
                            </Modal>
                        </div>
                    ) : null}
                </Message>
                )}
                {property.reviews.length === 0 ? (
                    <div>
                        <Header
                            as="h3"
                            dividing
                            style={{
                                color: "#465672",
                                borderBottomColor: "#465672"
                            }}
                        >
                            There are no reviews yet. Be the first to review{" "}
                            {property.name}
                        </Header>
                    </div>
                ) : (
                    <div className="reviews__container">
                        <RatingBar property={property} />

                        {property.reviews.map((review, i) => (
                            <Review
                                key={i}
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
    mapDispatchToProps
)(Reviews);
