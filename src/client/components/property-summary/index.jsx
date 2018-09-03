import React from "react";
import "./index.scss";
import { Header, Icon } from "semantic-ui-react";
import PropTypes from "prop-types";
import Modal from "../modal";
import MapView from "../map-view";

export class PropertySummary extends React.Component {
    handleRedirectToMap = () => {
        console.log(this.props.property.coordinates);
    };

    render() {
        const { property } = this.props;

        return (
            <div className="property-summary__container">
                <Header
                    as="h1"
                    style={{
                        fontSize: 23,
                        padding: 10,
                        lineHeight: 1.2,
                        color: "#465672"
                    }}
                >
                    {property.name}
                </Header>

                <div className="location__container">
                    <p
                        as="h2"
                        style={{
                            fontSize: 16,
                            padding: 10,
                            lineHeight: 1.2,
                            color: "#465672"
                        }}
                    >
                        <Icon
                            style={{ cursor: "pointer" }}
                            name="map marker alternate"
                            onClick={this.handleRedirectToMap}
                        />
                        {property.address} -{" "}
                        <Modal
                            trigger={
                                <span
                                    style={{
                                        cursor: "pointer",
                                        color: "#465672",
                                        textDecoration: "underline"
                                    }}
                                />
                            }
                        >
                            map
                        </Modal>
                    </p>
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
