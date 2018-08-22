import React from "react";

import { storiesOf } from "@storybook/react";

import { AvailabilityPanel } from "../src/client/components/availability-panel/index";

storiesOf("AvailabilityPanel", module)
    .add("availability panel with custom props", () => (
        <AvailabilityPanel
            propertyName="Hotel Dolynskiy"
            checkIn={new Date("Aug 14 2018")}
            checkOut={new Date("Aug 16 2018")}
            adults={1}
            rooms={2}
            children={4}
            onDatesChange={value =>
                console.log(
                    `check-in: ${new Date(
                        value.startDate
                    )}, check-out: ${new Date(value.endDate)}`
                )
            }
            onAdultsChange={value => console.log(`adults: ${value}`)}
            onChildrenChange={value => console.log(`children: ${value}`)}
            onRoomsChange={value => console.log(`rooms: ${value}`)}
            onAvailabilityCheck={() => console.log("Check Availability!")}
        />
    ))

    .add("availability panel with empty props", () => (
        <AvailabilityPanel
            propertyName="Hotel Dolynskiy"
            onDatesChange={value =>
                console.log(
                    `check-in: ${new Date(
                        value.startDate
                    )}, check-out: ${new Date(value.endDate)}`
                )
            }
            onAdultsChange={value => console.log(`adults: ${value}`)}
            onChildrenChange={value => console.log(`children: ${value}`)}
            onRoomsChange={value => console.log(`rooms: ${value}`)}
            onAvailabilityCheck={() => console.log("Check Availability!")}
        />
    ));
