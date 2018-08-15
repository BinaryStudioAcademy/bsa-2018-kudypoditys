import React from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { MAPBOX_TOKEN } from "client/constants";
import { Icon } from "semantic-ui-react";

import "mapbox-gl/dist/mapbox-gl.css";
class MapView extends React.Component {
    state = {
        viewport: {
            width: 500,
            height: 500,
            latitude: 49.837089,
            longitude: 24.021161,
            zoom: 15,
            mapboxApiAccessToken: MAPBOX_TOKEN
        }
    };

    render() {
        return (
            <ReactMapGL
                {...this.state.viewport}
                onViewportChange={viewport => this.setState({ viewport })}
                mapStyle="mapbox://styles/mapbox/streets-v9"
            >
                <Marker
                    latitude={49.837089}
                    longitude={24.021161}
                    offsetLeft={-20}
                    offsetTop={-10}
                >
                    <Icon size="big" name="map marker alternate" />
                </Marker>
                <Popup
                    tipSize={15}
                    anchor="left"
                    offsetLeft={10}
                    latitude={49.837089}
                    longitude={24.021161}
                    closeButton={false}
                    closeOnClick={true}
                    dynamicPosition={true}
                >
                    1200 ГРН
                </Popup>
            </ReactMapGL>
        );
    }
}
export default MapView;
