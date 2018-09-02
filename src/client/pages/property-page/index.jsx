import React from "react";
import "./index.scss";
import {
    Divider,
    Container,
    Segment,
    Breadcrumb,
    Icon,
    TransitionablePortal,
    Button,
    Image,
    // Modal
} from "semantic-ui-react";
import _ from 'lodash'
import {connect} from "react-redux";
import {mapStateToProps, mapDispatchToProps} from "./container";
import Search from "client/components/search";
import Header from "client/components/header";
import AvailabilityPanel from "client/components/availability-panel";
import Slider from "client/components/slider";
import PropertyDescription from "client/components/property-description";
import {PropertySummary} from "client/components/property-summary";
import {NavigationBar} from "client/components/navigation-bar";
import BasicMapWidget from "client/components/basic-map-widget";
import RoomsSummaryTable from "client/components/rooms-summary-table";
import Modal from "../../components/modal";
import BookingForm from "../../components/booking-form";

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


    render() {
        const {property, user} = this.props;

        const handleSlideChange = index => {
            console.log(`Slide changed to ${index}`);
        };

        if (!property) return null;

        const pics = this.getImagesArray(property.images);
        const sections = [
            {key: "Home", content: "Home", href: "/"},
            {
                key: "Country",
                content: `${property.city.country.name}`,
                href: "#"
            },
            {
                key: "Region",
                content: `${property.city.name} Region`,
                href: "#"
            },
            {
                key: "City",
                content: property.city.name,
                href: "#"
            },
            {
                key: "Property",
                content: property.name,
                link: false,
                active: true
            }
        ];
        const { open } = this.state
        return (
            <div className="mock">
                <Header showSearch={true}/>
                <div className="property-page__wrapper">
                    <div className="breadcrumb_wrapper">
                        <Segment>
                            <Breadcrumb
                                icon="right angle"
                                sections={sections}
                            />
                        </Segment>
                    </div>

                    <div text className="property-page__wrapper-left_side">
                        <BasicMapWidget
                            key="BasicMapWidget"
                            location={property.coordinates}
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
                        <NavigationBar property={property}/>
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
                            // onClose={this.props.clearBookingForm}
                        >
                            <Reviews property={property}/>
                        </Modal>
                        <PropertySummary property={property}/>
                        <Slider
                            pics={pics}
                            handleSlideChange={handleSlideChange}
                            slideIndex={0}
                        />

                        <Divider hidden/>
                        <div
                            className="property-page__description"
                            style={{width: "100%"}}
                        >
                            <PropertyDescription
                                property={property}
                                style={{width: "100%"}}
                            />
                        </div>
                        <Divider hidden/>

                        <AvailabilityPanel style={{width: "100%"}}/>
                        <RoomsSummaryTable rooms={property.rooms}/>



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
