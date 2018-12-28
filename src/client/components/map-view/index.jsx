import React, { Fragment } from "react";
import { connect } from 'react-redux';
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { MAPBOX_TOKEN } from "client/constants";
import { Icon, Label } from "semantic-ui-react";
import MapPropertyItem from "client/components/map-property-item";
import PropTypes from "prop-types";
import MapPopupItem from "client/components/map-popup-item";
import { convert } from '../../helpers/convertCurrency';

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
        this.price = 0;
    }
    renderPopup = () => {
        const { popupInfo, controlEnable } = this.state;

        const propertyCurrency = popupInfo && popupInfo.currency && popupInfo.currency.code;

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
                    {/*<MapPopupItem*/}
                    {/*propertyName={popupInfo.name}*/}
                    {/*price={popupInfo.price}*/}
                    {/*rating={popupInfo.rating}*/}
                    {/*/>*/}
                    <MapPopupItem
                        propertyName={popupInfo.name}
                        propertyAddress={popupInfo.address}
                        propertyCurrency={propertyCurrency}
                        price={popupInfo.price}
                        rating={popupInfo.rating}
                        imageSrc={popupInfo.imageSrc}
                    // closeClicked={() => this.setState({ propertyInfo: null })}
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
                height: this.props.height || window.innerHeight - 65
            }
        });
    };
    renderPropertyMarker = (property, index) => {
        let coast = 0;
        if(property.rooms)
         coast = property.rooms.map(x => x.price)[0]       

        const propCurrency = property.currency && property.currency.code;
        const currency = this.props.currency.code;

        const price = convert(propCurrency, coast, currency);
        this.price = price;

        return (
            <Marker
                key={`marker-${index}`}
                latitude={property.coordinates.lat}
                longitude={property.coordinates.lng}
                offsetLeft={-20}
                offsetTop={-10}
            >
                <div className="mark1">
                <Icon
                    size="big"
                    name="map marker alternate"
                    onMouseEnter={() => this.setState({ popupInfo: property })}
                    onMouseLeave={() => this.setState({ popupInfo: null })}
                    onClick={() => {
                        this.handleMarkerClicked(property);
                    }}
                >

                </Icon>
                    {this.price ? (
                        <Label
                            style={{
                                whiteSpace: "nowrap",
                                fontSize: 10,
                                position: "relative",
                                left: -7

                            }}
                            color="#d6d3d3"
                        >
                            {currency} {this.price}
                        </Label>
                    ) : null}
                </div>
            </Marker>
        );
    };
    handleMarkerClicked = property => {
        if (this.state.controlEnable) this.setState({ propertyInfo: property });
    };
    changePropertyInfo = newPropertyInfo => this.setState({ propertyInfo: newPropertyInfo})

    renderInfo = () => {
        const { propertyInfo } = this.state;

        return (
            propertyInfo && (
                <MapPropertyItem
                    propertyName={propertyInfo.name}
                    propertyAddress={propertyInfo.address}
                    propertyCurrency={propertyInfo.currency.code}
                    price={propertyInfo.price ? propertyInfo.price : this.price}
                    rating={propertyInfo.rating}
                    imageSrc={propertyInfo.imageSrc}
                    closeClicked={this.changePropertyInfo.bind(this, null)}
                    propertyId={propertyInfo.id}
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

export default connect((state) => ({ currency: state.header.selectedCurrency }))(MapView);
