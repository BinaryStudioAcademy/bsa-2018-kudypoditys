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
export class PropertyPage extends React.Component {
    componentWillMount() {
        this.props.getProperty(2);
    }

    render() {
        let propertyItemData = {
            name: "DREAM Hostel Lviv",
            location: "Prospekt Gagarina 145, Lviv, 61124, Ukraine "
        };
        const pics = [
            "https://www.hotelimperialeroma.it/data/mobile/hotel-imperiale-roma-camere-01-2.jpg",
            "https://www.hotelimperialeroma.it/data/jpg/hotel-imperiale-rome-8.jpg",
            "https://www.hotelimperialeroma.it/data/jpg/hotel-imperiale-rome-10.jpg",
            "https://www.hotelimperialeroma.it/data/jpg/hotel-imperiale-rome-11.jpg",
            "https://www.hotelimperialeroma.it/data/jpg/hotel-imperiale-rome-12.jpg"
        ];

        const sections = [
            { key: "Main", content: "Main", link: true },
            { key: "Country", content: "Ukraine", link: true },
            { key: "Region", content: "Lviv Region", link: true },
            { key: "City", content: "Lviv", link: true },
            { key: "Property", content: "DREAM Hostel Lviv", active: true }
        ];

        const handleSlideChange = index => {
            console.log(`Slide changed to ${index}`);
        };

        return (
            <div className="mock">
                <Header showSearch={true} />
                <div className="property-page__wrapper">
                    <div className="breadcrumb_wrapper">
                        <Segment>
                            <Breadcrumb
                                icon="right angle"
                                sections={[
                                    { key: "Home", content: "Home", href: "#" },
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
                                ]}
                            />
                        </Segment>
                    </div>

                    <Container
                        text
                        className="property-page__wrapper-left_side"
                    >
                        <BasicMapWidget
                            key="BasicMapWidget"
                            location={{ lat: 49.837089, lng: 24.021161 }}
                            rounded
                            centered
                        />
                    </Container>

                    <Container
                        text
                        className="property-page__wrapper-right_side"
                    >
                        <NavigationBar />

                        <PropertySummary propertyItemData={propertyItemData} />
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
                                id="xyz-1"
                                style={{ width: "100%" }}
                            />
                        </div>
                        <Divider hidden />

                        <AvailabilityPanel style={{ width: "100%" }} />
                        <RoomsSummaryTable />
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
