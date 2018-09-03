import React from "react";
import MapView from "../map-view";

class BasicMapWidget extends React.Component {
    render() {
        const { controlEnable, disablePopup, coordinates } = this.props;
        return (
            <MapView
                width={250}
                height={250}
                properties={[
                    {
                        price: 1200,
                        name: "Avangard Kulisha Apartment",
                        latitude: 49.837089,
                        longitude: 24.021161,
                        imageSrc:
                            "https://www.hotelimperialeroma.it/data/mobile/hotel-imperiale-roma-camere-01-2.jpg"
                    }
                ]}
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
