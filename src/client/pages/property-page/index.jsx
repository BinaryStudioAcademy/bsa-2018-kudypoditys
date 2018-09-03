import React from "react";
import "./index.scss";
import { Divider, Container, List, Header, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";
import Search from "client/components/search";
import AppHeader from "client/components/header";
import AvailabilityPanel from "client/components/availability-panel";
import Slider from "client/components/slider";
import PropertyDescription from "client/components/property-description";
import { PropertySummary } from "client/components/property-summary";
import { NavigationBar } from "client/components/navigation-bar";
import BasicMapWidget from "client/components/basic-map-widget";
import RoomsSummaryTable from "client/components/rooms-summary-table";
import Modal from "../../components/modal";
import BookingForm from "../../components/booking-form";
import ReactDOM from "react-dom";
import HouseRules from "./rules";
import PaymentMethods from "./payment";
import Reviews from "../../components/reviews";
import {getGroupedArray, getAvgFromArray} from 'client/helpers/avgReviewRating';

export class PropertyPage extends React.Component {
    componentWillMount() {
        this.props.getProperty(this.props.match.params.id);
        this.props.getBookings();
    }

    getImagesArray(propertyImages) {
        let images = [];
        for (let i = 0; i < propertyImages.length; i++) {
            images.push(propertyImages[i].url);
        }
        return images;
    }

    scrollTo = targetRef => {
        const node = ReactDOM.findDOMNode(this.refs[targetRef]);
        node.scrollIntoView();
    };

    render() {
        const { property, user } = this.props;
        console.log(property)
        // const avgPropRatingArray = getGroupedArray(property.reviews, "avgReview")
        const dividerStyle = {
            color: "#465672",
            borderTop: "1px solid #46567215",
            borderBottom: "1px solid #465672"
        };

        const handleSlideChange = index => {
            console.log(`Slide changed to ${index}`);
        };

        if (!property) return null;

        //AVG PROPERTY RATING
        const avgPropRatingArray = getGroupedArray(property.reviews, "avgReview")
        const avgPropRating = getAvgFromArray(avgPropRatingArray);
        console.log(avgPropRating)
        const pics = this.getImagesArray(property.images);
        return (
            <div className="mock">
                <AppHeader showSearch={true} />
                <div className="property-page__wrapper">
                    <div text className="property-page__wrapper-left_side">
                        <BasicMapWidget
                            key="BasicMapWidget"
                            coordinates={property.coordinates}
                            controlEnable={false}
                            rounded
                            centered
                        />
                        {user ? (
                            <Modal
                                trigger={
                                    <div
                                        className="book-btn"
                                        style={{ height: "33px" }}
                                    >
                                        <button>Book now</button>
                                        <div
                                            className="book-icon"
                                            style={{ cursor: "pointer" }}
                                        >
                                            <Icon
                                                name="bookmark"
                                                size="large"
                                            />
                                        </div>
                                    </div>
                                }
                                onClose={this.props.clearBookingForm}
                            >
                                <BookingForm
                                    rooms={property.rooms}
                                    paymentTypes={property.paymentTypes}
                                />
                            </Modal>
                        ) : null}
                    </div>

                    <Container
                        text
                        className="property-page__wrapper-right_side"
                    >
                        <NavigationBar
                            reviewsCount={property.reviews.length}
                            facilitiesClick={() => {
                                this.scrollTo("facilitiesRef");
                            }}
                            infoClick={() => {
                                this.scrollTo("roomsRef");
                            }}
                            rulesClick={() => {
                                this.scrollTo("houseRuleRef");
                            }}
                            reviewsClick={() => {
                                this.scrollTo("reviewsRef");
                            }}
                        />
                        <Divider />
                        <PropertySummary property={property} />
                        <div className="rating_block">
                            <div style={{
                                textAlign: "center",
                                display: "flex",
                                flexDirection: "column",
                                paddingRight: 10
                            }}>
                                <div className="ratingName">
                                    {" "}
                                    VeryGood
                                </div>
                                <br/>
                                <span className="reviewsNumber">{property.reviews.length} reviews</span>

                            </div>


                            <div className="rating_num"> {avgPropRating}</div>
                        </div>
                        <Slider
                            pics={pics}
                            handleSlideChange={handleSlideChange}
                            slideIndex={0}
                        />

                        <Divider hidden />
                        <div
                            className="property-page__description"
                            style={{ width: "100%" }}
                        >
                            <PropertyDescription
                                property={property}
                                style={{ width: "100%" }}
                            />
                            <Divider style={dividerStyle} />
                            <Container
                                text
                                style={{
                                    display: "table",
                                    lineHeight: 1.2,
                                    color: "green"
                                }}
                            >
                                <div className="facilities-section">
                                    <div ref={"facilitiesRef"}>
                                        <Header
                                            as="h2"
                                            style={{ color: "#465672" }}
                                        >
                                            Facilities
                                        </Header>
                                        <List>
                                            {property.facilityLists.map(
                                                (item, i) => {
                                                    return (
                                                        <List.Item>
                                                            <List.Content>
                                                                <span
                                                                    key={i}
                                                                    style={{
                                                                        marginRight: 10,
                                                                        marginBottom: 10,
                                                                        fontSize: 18,
                                                                        lineHeight: 1.2,
                                                                        color:
                                                                            "rgb(166,174,188)"
                                                                    }}
                                                                >
                                                                    {
                                                                        item
                                                                            .facility
                                                                            .name
                                                                    }
                                                                </span>
                                                            </List.Content>
                                                        </List.Item>
                                                    );
                                                }
                                            )}
                                        </List>
                                    </div>
                                    <div
                                        className="rules-payment-section"
                                        ref={"houseRuleRef"}
                                    >
                                        <Header
                                            as="h2"
                                            style={{ color: "#465672" }}
                                        >
                                            Hotel Policy
                                        </Header>
                                        <HouseRules
                                            rules={property.accommodationRule}
                                        />
                                        <Header
                                            as="h2"
                                            style={{ color: "#465672" }}
                                        >
                                            Payment Method
                                        </Header>
                                        <PaymentMethods
                                            paymentTypes={property.paymentTypes}
                                        />
                                    </div>
                                </div>
                            </Container>
                        </div>

                        <Divider
                            style={{
                                color: "#465672",
                                borderTop: "1px solid #46567215",
                                borderBottom: "1px solid #465672"
                            }}
                        />

                        <AvailabilityPanel style={{ width: "100%" }} />
                        <Divider style={dividerStyle} />
                        <div>
                            <Header
                                as="h2"
                                style={{
                                    paddingLeft: "15px",
                                    color: "#465672"
                                }}
                            >
                                Rooms
                            </Header>
                            <RoomsSummaryTable
                                ref={"roomsRef"}
                                rooms={property.rooms}
                            />
                        </div>
                        <Divider style={dividerStyle} />
                        <div ref="reviewsRef">
                            <Header
                                as="h2"
                                style={{
                                    paddingLeft: "15px",
                                    color: "#465672"
                                }}
                            >
                                Reviews
                            </Header>
                            <Reviews property={property}/>
                        </div>
                    </Container>
                </div>
            </div>
        );
    }
}

PropertyPage.propTypes = {};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PropertyPage);
