import {storiesOf} from "@storybook/react";
import {PropertySummary} from "../src/client/components/property-summary";
import React from "react";

let propertyItemData = {
    name: 'DREAM Hostel Lviv',
    location: 'Prospekt Gagarina 145, Kharkov, 61124, Ukraine '
};


storiesOf('PropertySummary', module)
    .add('Item base state', () => <PropertySummary propertyItemData={propertyItemData}/>);
