import React from "react";

import { storiesOf } from "@storybook/react";

import { PropertyPage } from "../src/client/pages/property-page/index";

storiesOf("PropertyPage", module).add("Item base state", () => (
    <PropertyPage />
));
