import React from "react";

import { storiesOf } from "@storybook/react";

import { AvailabilityCalendar } from "../src/client/components/property-availability-calendar/index";

storiesOf("AvailabilityCalendar", module).add("Basic", () => (
    <AvailabilityCalendar />
));
