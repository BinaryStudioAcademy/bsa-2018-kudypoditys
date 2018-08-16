import React from "react";

import { storiesOf } from "@storybook/react";

import MapPropertyItem from "client/components/map-property-item";

storiesOf("Map property item", module).add("Basic", () => (
    <MapPropertyItem
        propertyName={"Avangard Kulisha Apartment"}
        propertyAddress={"15 Panteleimona Kulisha Street, Львов"}
        price={"1200 UAH"}
        rating={"10/10"}
    />
));
