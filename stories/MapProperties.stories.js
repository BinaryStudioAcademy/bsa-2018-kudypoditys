import React from "react";

import { storiesOf } from "@storybook/react";

import Map from "client/components/map-view";

const properties = [
    {
        price: 5000,
        name: "Villa Prestige",
        latitude: 49.856761,
        longitude: 24.0214934,
        imageSrc:
            "https://www.hotelimperialeroma.it/data/mobile/hotel-imperiale-roma-camere-01-2.jpg"
    },
    {
        price: 1200,
        name: "DREAM Hostel Lviv",
        latitude: 49.8513984,
        longitude: 24.0310599,
        imageSrc:
            "https://www.hotelimperialeroma.it/data/jpg/hotel-imperiale-rome-8.jpg"
    },
    {
        price: 5000,
        name: "Park Hotel",
        latitude: 49.8474261,
        longitude: 24.0252256,
        imageSrc:
            "https://www.hotelimperialeroma.it/data/jpg/hotel-imperiale-rome-12.jpg"
    },
    {
        price: 2000,
        name: "The Sky Loft",
        latitude: 49.8481073,
        longitude: 24.0154046,
        imageSrc:
            "https://www.hotelimperialeroma.it/data/jpg/hotel-imperiale-rome-10.jpg"
    },
    {
        price: 3000,
        name: "Avangard Kulisha Apartment",
        latitude: 49.8376405,
        longitude: 24.0253219,
        imageSrc:
            "https://www.hotelimperialeroma.it/data/jpg/hotel-imperiale-rome-11.jpg"
    }
];

storiesOf("Map properties", module)
    .add("Map with markers, popup hover and property info", () => (
        <div style={{ maxHeight: "100px", maxWidth: "100px" }}>
            <Map
                properties={properties}
                startPosition={{ latitude: 49.837089, longitude: 24.021161 }}
                zoom={13}
                controlEnable={true}
            />
        </div>
    ))
    .add("Map with marker and blocked control", () => (
        <Map
            width={400}
            height={400}
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
            zoom={13}
            controlEnable={false}
        />
    ));
