import React from "react";
import "./index.scss";
import {Header, Icon} from "semantic-ui-react";
import PropTypes from "prop-types";
import MapWidgetModal from "client/components/map-widget-modal";
export class PropertySummary extends React.Component {
    handleRedirectToMap = () => {
        console.log(this.props.property.coordinates);
    };

    render() {
        const {property} = this.props;

        return (
            <div className="property-summary__container">
                <Header
                    as="h1"
                    style={{fontSize: 23, padding: 10, lineHeight: 1.2}}
                >
                    {property.name}
                </Header>

                <div className="location__container">
                    <Header
                        as="h2"
                        style={{fontSize: 16, padding: 10, lineHeight: 1.2}}
                    >
                        {/*<Icon*/}
                        {/*style={{cursor: "pointer"}}*/}
                        {/*name="map outline"*/}
                        {/*onClick={this.handleRedirectToMap}*/}
                        {/*/>*/}
                        <MapWidgetModal
                            properties={[
                                {
                                    price: 3000,
                                    name: property.name,
                                    latitude: property.coordinates.lat
                                    ,
                                    longitude: property.coordinates.lng,
                                    imageSrc:
                                        "https://www.hotelimperialeroma.it/data/jpg/hotel-imperiale-rome-11.jpg",
                                    address: property.address,
                                    rating: property.rating
                                }
                            ]}
                            startPosition={{
                                latitude: property.coordinates.lat,
                                longitude: property.coordinates.lng
                            }}
                            zoom={13}
                            controlEnable={true}
                            buttonClass={"searchMapButto"}
                        />
                        {property.address}
                    </Header>
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
