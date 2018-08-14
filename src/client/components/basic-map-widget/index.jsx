import React from "react";
import Map from './map'

const GOOGLE_MAP_URL = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA0dkzMEoW2UBi7tA1TVAMbrwCUStF_9xw&v=3.exp&libraries=geometry,drawing,places`

class BasicMapWidget extends React.Component {

    render() {
        return (
            <Map
                location={this.props.location}
                googleMapURL={GOOGLE_MAP_URL}
                loadingElement={<div style={{height: `100%`}}/>}
                containerElement={<div style={{height: `200px`, width: `250px`}}/>}
                mapElement={<div style={{height: `100%`}}/>}
            />
        );
    }
}

export default BasicMapWidget