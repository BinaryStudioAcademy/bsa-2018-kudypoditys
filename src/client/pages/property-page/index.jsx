import React from "react";
import "./index.scss";
import { Divider, Container, Segment, Header, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";
import Search from "client/components/search";
import AppHeader from "client/components/header";
import AvailabilityPanel from "client/components/availability-panel";
import Slider from "client/components/slider";
import PropertyDescription from "client/components/property-description";
import {PropertySummary} from "client/components/property-summary";
import {NavigationBar} from "client/components/navigation-bar";
import BasicMapWidget from "client/components/basic-map-widget";
import RoomsSummaryTable from "client/components/rooms-summary-table";
import Modal from "../../components/modal";
import BookingForm from "../../components/booking-form";
import ReactDOM from "react-dom";

import Reviews from "client/components/reviews";


export class PropertyPage extends React.Component {


    state = { open: false }

    handleOpen = () => this.setState({ open: true })

    handleClose = () => this.setState({ open: false })
    componentWillMount() {
        this.props.getProperty(this.props.match.params.id);
        console.log(this.props.match.params.id)

    }

    getImagesArray(propertyImages) {
        let images = [];
        for (let i = 0; i < propertyImages.length; i++) {
            images.push(propertyImages[i].url);
        }
        return images;
    }

    onBookSubmit = event => {
        console.log("book!");

    };

    scrollTo = targetRef => {
        const node = ReactDOM.findDOMNode(this.refs[targetRef]);
        node.scrollIntoView();
    };

    render() {
        const {property, user} = this.props;

        const handleSlideChange = index => {
            console.log(`Slide changed to ${index}`);
        };

        if (!property) return null;

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
                                        style={{height: "33px"}}
                                    >
                                        <button>Book now</button>
                                        <div
                                            className="book-icon"
                                            style={{cursor: "pointer"}}
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
                                    onBook={this.onBookSubmit}
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
                        />
                        <Divider />
                        <PropertySummary property={property} />
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
                            <Container
                                text
                                style={{
                                    display: "table",
                                    lineHeight: 1.2,
                                    color: "green"
                                }}
                            >
                                <div ref={"facilitiesRef"}>
                                    <Header as="h2">Facilities</Header>
                                    {property.facilityLists.map((item, i) => {
                                        return (
                                            <span
                                                key={i}
                                                style={{
                                                    marginRight: 10,
                                                    marginBottom: 10,
                                                    fontSize: 18,
                                                    lineHeight: 1.2,
                                                    color: "green"
                                                }}
                                            >
                                                {item.facility.name}
                                            </span>
                                        );
                                    })}
                                </div>
                            </Container>
                        </div>
                        <Divider hidden />

                        <AvailabilityPanel style={{ width: "100%" }} />
                        <RoomsSummaryTable
                            ref={"roomsRef"}
                            rooms={property.rooms}
                        />
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
