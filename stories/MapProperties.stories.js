import React from "react";

import { storiesOf } from "@storybook/react";

import Map from "client/components/map-view";

const properties = [
    {
        latitude: 49.837089,
        longitude: 24.021161,
        text: "123"
    },
    {
        latitude: 49.937089,
        longitude: 24.021161,
        text: "456"
    },
    {
        latitude: 49.827089,
        longitude: 24.021161,
        text: "789"
    },
    {
        latitude: 49.827089,
        longitude: 24.031161,
        text: "789"
    },
    {
        latitude: 49.827069,
        longitude: 24.031161,
        text: "789"
    }
];

storiesOf("Map properties", module).add("Basic", () => (
    <Map
        properties={properties}
        startPosition={{ latitude: 49.837089, longitude: 24.021161 }}
        // popupText={"1200 грн"}
        zoom={10}
        controlEnable={true}
    />
));
