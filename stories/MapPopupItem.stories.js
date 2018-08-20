import React from "react";

import {storiesOf} from "@storybook/react";

import MapPopupItem from "client/components/map-popup-item";


storiesOf("Map popup item", module).add("Basic", () => (
    <MapPopupItem
        propertyName={"Avangard Kulisha Apartment"}
        price={"1200 UAH"}
        rating={"10/10"}
    />
));
