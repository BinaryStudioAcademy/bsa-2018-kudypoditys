import React, { Fragment } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { MAPBOX_TOKEN } from "client/constants";
import { Icon } from "semantic-ui-react";
import MapPropertyItem from "client/components/map-property-item";

import "mapbox-gl/dist/mapbox-gl.css";
class MapView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                width: 500,
                height: 500,
                latitude: this.props.startPosition.latitude,
                longitude: this.props.startPosition.longitude,
                zoom: this.props.zoom,
                mapboxApiAccessToken: MAPBOX_TOKEN
            },
            controlEnable: this.props.controlEnable,
            popupInfo: null
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("This state ", this.state);
        console.log("Next state ", nextState);
        return !this.state.popupInfo;
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize);
        this.resize();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resize);
    }

    resize = () => {
        this.setState({
            viewport: {
                ...this.state.viewport,
                width: this.props.width || window.innerWidth,
                height: this.props.height || window.innerHeight
            }
        });
    };

    renderPopup = () => {
        const { popupInfo } = this.state;
        console.log("Render");
        return (
            popupInfo && (
                <Popup
                    tipSize={15}
                    anchor="left"
                    offsetLeft={10}
                    latitude={popupInfo.latitude}
                    longitude={popupInfo.longitude}
                    // closeButton={true}
                    // closeOnClick={false}
                    dynamicPosition={true}
                    onClose={() => this.setState({ popupInfo: null })}
                >
                    <MapPropertyItem
                        propertyName={"Avangard Kulisha Apartment"}
                        propertyAddress={
                            "15 Panteleimona Kulisha Street, Львов"
                        }
                        price={"1200 UAH"}
                        rating={"10/10"}
                    />
                </Popup>
            )
        );
    };

    renderPropertyMarker = (property, index) => {
        return (
            <Marker
                key={`marker-${index}`}
                latitude={property.latitude}
                longitude={property.longitude}
                offsetLeft={-20}
                offsetTop={-10}
            >
                <Icon
                    size="big"
                    name="map marker alternate"
                    onClick={() => this.setState({ popupInfo: property })}
                />
            </Marker>
        );
    };

    handleViewportChange = viewport => {
        if (this.state.controlEnable) this.setState({ viewport });
    };

    render() {
        return (
            <Fragment>
                <ReactMapGL
                    {...this.state.viewport}
                    onViewportChange={this.handleViewportChange}
                    mapStyle="mapbox://styles/mapbox/streets-v9"
                >
                    {this.props.properties.map(this.renderPropertyMarker)}
                    {this.renderPopup()}
                </ReactMapGL>
            </Fragment>
        );
    }
}

export default MapView;
