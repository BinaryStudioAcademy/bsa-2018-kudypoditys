import React from "react";
import MapView from "../map/map-view";

class BasicMapWidget extends React.Component {
    render() {
        const {
            controlEnable,
            disablePopup,
            coordinates,
            fullScreen,
            properties
        } = this.props;
        return (
            <MapView
                style={{
                    width: fullScreen ? "100%" : "default",
                    height: fullScreen ? "100%" : "default"
                }}
                width={!fullScreen ? 250 : null}
                height={!fullScreen ? 250 : null}
                properties={properties}
                startPosition={{
                    latitude: coordinates.lat,
                    longitude: coordinates.lng
                }}
                zoom={12}
                controlEnable={controlEnable}
                disablePopup={disablePopup}
            />
        );
    }
}
export default BasicMapWidget;
