import React from "react";

import { storiesOf } from "@storybook/react";
import PhoneInput from "../src/client/components/phone-input";

const handleNumberChanged = value => {
    // console.log("Number changed", value);
};

const handlePrefixChanged = value => {
    // console.log("Prefix changed", value);
};

storiesOf("Phone input", module)
    .add("Basic", () => (
        <PhoneInput
            handleNumberChanged={handleNumberChanged}
            handlePrefixChanged={handlePrefixChanged}
        />
    ))
    .add("Error", () => (
        <PhoneInput
            error={true}
            handleNumberChanged={handleNumberChanged}
            handlePrefixChanged={handlePrefixChanged}
        />
    ));
