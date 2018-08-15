import React from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { MAPBOX_TOKEN } from "client/constants";
import { Icon } from "semantic-ui-react";

import "mapbox-gl/dist/mapbox-gl.css";
class MapView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                width: 500,
                height: 500,
                latitude: this.props.latitude,
                longitude: this.props.longitude,
                zoom: this.props.zoom,
                mapboxApiAccessToken: MAPBOX_TOKEN
            },
            controlEnable: this.props.controlEnable
        };
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

    handleViewportChange = viewport => {
        if (this.state.controlEnable) this.setState({ viewport });
    };

    render() {
        return (
            <ReactMapGL
                {...this.state.viewport}
                onViewportChange={this.handleViewportChange}
                mapStyle="mapbox://styles/mapbox/streets-v9"
            >
                <Marker
                    latitude={this.props.latitude}
                    longitude={this.props.longitude}
                    offsetLeft={-20}
                    offsetTop={-10}
                >
                    <Icon size="big" name="map marker alternate" />
                </Marker>
                {this.props.popupText ? (
                    <Popup
                        tipSize={15}
                        anchor="left"
                        offsetLeft={10}
                        latitude={this.props.latitude}
                        longitude={this.props.longitude}
                        closeButton={false}
                        closeOnClick={false}
                        dynamicPosition={true}
                    >
                        {this.props.popupText}
                    </Popup>
                ) : (
                    ""
                )}
            </ReactMapGL>
        );
    }
}
export default MapView;
