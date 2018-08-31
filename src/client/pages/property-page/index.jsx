import React from "react";
import "./index.scss";
import { Divider, Container, Segment, Breadcrumb } from "semantic-ui-react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";
import Search from "client/components/search";
import Header from "client/components/header";
import AvailabilityPanel from "client/components/availability-panel";
import Slider from "client/components/slider";
import PropertyDescription from "client/components/property-description";
import { PropertySummary } from "client/components/property-summary";
import { NavigationBar } from "client/components/navigation-bar";
import BasicMapWidget from "client/components/basic-map-widget";
import RoomsSummaryTable from "client/components/rooms-summary-table";
import Reviews from "client/components/reviews";


export class PropertyPage extends React.Component {
    componentWillMount() {
        this.props.getProperty(this.props.match.params.id);
    }

    getImagesArray(propertyImages) {
        let images = [];
        for (let i = 0; i < propertyImages.length; i++) {
            images.push(propertyImages[i].url);
        }
        return images;
    }

    render() {
        const { property } = this.props;

        const handleSlideChange = index => {
            console.log(`Slide changed to ${index}`);
        };

        if (!property) return null;

        const pics = this.getImagesArray(property.images);
        const sections = [
            { key: "Home", content: "Home", href: "/" },
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

        return (
            <div className="mock">
                <Header showSearch={true} />
                <div className="property-page__wrapper">
                    <div className="breadcrumb_wrapper">
                        <Segment>
                            <Breadcrumb
                                icon="right angle"
                                sections={
                                    sections /*[
                                    { key: "Home", content: "Home", href: "/" },
                                    {
                                        key: "Ukraine",
                                        content: "Ukraine",
                                        href: "#"
                                    },
                                    { key: "Lviv", content: "Lviv", href: "#" },
                                    {
                                        key: "DREAM Hostel Lviv",
                                        content: "DREAM Hostel Lviv",
                                        href: "#"
                                    }
                                ]*/
                                }
                            />
                        </Segment>
                    </div>

                    <Container
                        text
                        className="property-page__wrapper-left_side"
                    >
                        <BasicMapWidget
                            key="BasicMapWidget"
                            location={property.coordinates}
                            rounded
                            centered
                        />
                    </Container>

                    <Container
                        text
                        className="property-page__wrapper-right_side"
                    >
                        <NavigationBar />

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
                        </div>
                        <Divider hidden />

                        <AvailabilityPanel style={{ width: "100%" }} />
                        <RoomsSummaryTable rooms={property.rooms} />
                        <Reviews  />
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
