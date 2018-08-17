import React from "react";

import { storiesOf } from "@storybook/react";

import Map from "client/components/map-view";

const properties = [
    {
        price: "1200 UAH",
        name: "Avangard Kulisha Apartment",
        latitude: 49.837089,
        longitude: 24.021161,
        imageSrc:
            "https://www.hotelimperialeroma.it/data/mobile/hotel-imperiale-roma-camere-01-2.jpg"
    },
    {
        price: "1200 UAH",
        name: "Avangard Kulisha Apartment",
        latitude: 49.937089,
        longitude: 24.021161,
        imageSrc:
            "https://www.hotelimperialeroma.it/data/jpg/hotel-imperiale-rome-8.jpg"
    },
    {
        price: "1200 UAH",
        name: "Avangard Kulisha Apartment",
        latitude: 49.827089,
        longitude: 24.021161,
        imageSrc:
            "https://www.hotelimperialeroma.it/data/jpg/hotel-imperiale-rome-12.jpg"
    },
    {
        price: "1200 UAH",
        name: "Avangard Kulisha Apartment",
        latitude: 49.827089,
        longitude: 24.031161,
        imageSrc:
            "https://www.hotelimperialeroma.it/data/jpg/hotel-imperiale-rome-10.jpg"
    },
    {
        price: "1200 UAH",
        name: "Avangard Kulisha Apartment",
        latitude: 49.827069,
        longitude: 24.031161,
        imageSrc:
            "https://www.hotelimperialeroma.it/data/jpg/hotel-imperiale-rome-11.jpg"
    }
];

storiesOf("Map properties", module).add("Basic", () => (
    <Map
        properties={properties}
        startPosition={{ latitude: 49.837089, longitude: 24.021161 }}
        // popupText={"1200 грн"}
        zoom={13}
        controlEnable={true}
    />
));
