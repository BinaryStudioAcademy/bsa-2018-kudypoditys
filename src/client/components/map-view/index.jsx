import React, { Fragment } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { MAPBOX_TOKEN } from "client/constants";
import { Icon } from "semantic-ui-react";
import MapPropertyItem from "client/components/map-property-item";
import PropTypes from "prop-types";
import MapPopupItem from "client/components/map-popup-item";

import "mapbox-gl/dist/mapbox-gl.css";

class MapView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                latitude: this.props.startPosition.latitude,
                longitude: this.props.startPosition.longitude,
                zoom: this.props.zoom,
                mapboxApiAccessToken: MAPBOX_TOKEN
            },
            controlEnable: this.props.controlEnable,
            popupInfo: null,
            propertyInfo: null
        };
    }
    renderPopup = () => {
        const { popupInfo, controlEnable } = this.state;
        return (
            controlEnable &&
            popupInfo && (
                <Popup
                    tipSize={15}
                    anchor="left"
                    offsetLeft={10}
                    latitude={popupInfo.coordinates.lat}
                    longitude={popupInfo.coordinates.lng}
                    closeButton={false}
                    dynamicPosition={true}
                    onClose={() => this.setState({ popupInfo: null })}
                >
                    <MapPopupItem
                        propertyName={popupInfo.name}
                        price={popupInfo.price}
                        rating={popupInfo.rating}
                    />
                </Popup>
            )
        );
    };
    resize = () => {
        this.setState({
            viewport: {
                ...this.state.viewport,
                width: this.props.width || window.innerWidth - 75,
                height: this.props.height || window.innerHeight - 150
            }
        });
    };
    renderPropertyMarker = (property, index) => {
        return (
            <Marker
                key={`marker-${index}`}
                latitude={property.coordinates.lat}
                longitude={property.coordinates.lng}
                offsetLeft={-20}
                offsetTop={-10}
            >
                <Icon
                    size="big"
                    name="map marker alternate"
                    onMouseEnter={() => this.setState({ popupInfo: property })}
                    onMouseLeave={() => this.setState({ popupInfo: null })}
                    onClick={() => {
                        this.handleMarkerClicked(property);
                    }}
                />
            </Marker>
        );
    };
    handleMarkerClicked = property => {
        if (this.state.controlEnable) this.setState({ propertyInfo: property });
    };
    renderInfo = () => {
        const { propertyInfo } = this.state;
        return (
            propertyInfo && (
                <MapPropertyItem
                    propertyName={propertyInfo.name}
                    propertyAddress={propertyInfo.address}
                    price={propertyInfo.price}
                    rating={propertyInfo.rating}
                    imageSrc={propertyInfo.imageSrc}
                    closeClicked={() => this.setState({ propertyInfo: null })}
                />
            )
        );
    };

    componentDidMount() {
        window.addEventListener("resize", this.resize);
        this.resize();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resize);
    }

    handleViewportChange = viewport => {
        if (this.state.controlEnable) this.setState({ viewport });
    };

    render() {
        const { disablePopup } = this.props;
        return (
            <Fragment>
                <ReactMapGL
                    {...this.state.viewport}
                    onViewportChange={this.handleViewportChange}
                    mapStyle="mapbox://styles/mapbox/light-v9"
                >
                    {this.props.properties.map(this.renderPropertyMarker)}
                    {disablePopup ? null : this.renderPopup()}
                    {this.renderInfo()}
                </ReactMapGL>
            </Fragment>
        );
    }
}

MapPropertyItem.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    properties: PropTypes.array,
    startPosition: PropTypes.array,
    zoom: PropTypes.number,
    controlEnable: PropTypes.bool
};

export default MapView;
