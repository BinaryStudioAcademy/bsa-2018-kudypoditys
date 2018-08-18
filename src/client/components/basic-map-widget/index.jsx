import React from "react";
import MapView from "../map-view";

class BasicMapWidget extends React.Component {
    render() {
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
                startPosition={{ latitude: 49.837089, longitude: 24.021161 }}
                zoom={12}
                controlEnable={false}
            />

            // <MapView
            //     latitude={this.props.latitude}
            //     longitude={this.props.longitude}
            //     zoom={12}
            //     controlEnable={false}
            //     width={250}
            //     height={250}
            // />
        );
    }
}
export default BasicMapWidget;
