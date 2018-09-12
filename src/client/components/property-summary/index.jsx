import React from "react";
import "./index.scss";
import { Header, Icon, Rating } from "semantic-ui-react";
import PropTypes from "prop-types";
import Modal from "../modal";
import BasicMapWidget from "../basic-map-widget";
import RatingBlock from "../../components/reviews/ratingBlock";

import MapWidgetModal from "client/components/map-widget-modal";
export class PropertySummary extends React.Component {
    handleRedirectToMap = () => {
        console.log(this.props.property.coordinates);
    };

    render() {
        const {
            property,
            rating,
            totalReviews,
            bookingPage,
            labelBelow
        } = this.props;

        return (
            <div
                className="property-summary__container"
                style={{
                    margin: labelBelow ? "15px 0 0 0" : "15px 0 20px 0"
                }}
            >
                <div className="property-summary--left-section">
                    <Header
                        as="h1"
                        style={{
                            padding: 0,
                            lineHeight: 1.2,
                            color: "#465672",
                            cursor: this.props.onHeaderClick
                                ? "pointer"
                                : "default",
                            margin: "0",
                            paddingLeft: "10px"
                        }}
                        onClick={
                            this.props.onHeaderClick
                                ? this.props.onHeaderClick
                                : () => {}
                        }
                    >
                        {property.name}
                    </Header>

                    <Rating
                        rating={rating}
                        maxRating={5}
                        disabled
                        style={{ paddingLeft: "10px" }}
                    />
                    <div className="location__container">
                        <p
                            as="h2"
                            style={{
                                fontSize: 16,
                                padding: "0 0 10px 8px",
                                lineHeight: 1.2,
                                color: "#465672"
                            }}
                        >
                            <Icon name="map marker alternate" />
                            {property.address} -{" "}
                            <Modal
                                trigger={
                                    <span
                                        style={{
                                            cursor: "pointer",
                                            color: "#465672",
                                            textDecoration: "underline"
                                        }}
                                    >
                                        Show on map
                                    </span>
                                }
                                fullScreen
                            >
                                <BasicMapWidget
                                    style={{ width: "100%", height: "100%" }}
                                    coordinates={property.coordinates}
                                    properties={[property]}
                                    controlEnable={true}
                                    disablePopup={true}
                                    fullScreen
                                />
                            </Modal>
                        </p>
                    </div>
                </div>
                <div
                    className="property-summary--right-section"
                    style={bookingPage ? { paddingRight: "30px" } : null}
                >
                    <RatingBlock
                        avgPropRating={rating}
                        reviewsCount={totalReviews}
                        property={property}
                    />
                </div>
            </div>
        );
    }
}

PropertySummary.propTypes = {
    propertyItemData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired
    })
};
