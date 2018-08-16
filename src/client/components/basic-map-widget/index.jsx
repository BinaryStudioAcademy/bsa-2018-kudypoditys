import React from "react";
import MapView from "../map-view";

class BasicMapWidget extends React.Component {
    render() {
        return (
            <MapView
                latitude={this.props.latitude}
                longitude={this.props.longitude}
                zoom={12}
                controlEnable={false}
                width={250}
                height={250}
            />
        );
    }
}
export default BasicMapWidget;
