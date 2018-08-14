import React from "react";
import Map from "./map";
import "./index.scss";

const GOOGLE_MAP_URL = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA0dkzMEoW2UBi7tA1TVAMbrwCUStF_9xw&v=3.exp&libraries=geometry,drawing,places`;

class MapView extends React.Component {
    render() {
        return (
            <Map
                location={this.props.location}
                googleMapURL={GOOGLE_MAP_URL}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div className="map" />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        );
    }
}
export default MapView;
