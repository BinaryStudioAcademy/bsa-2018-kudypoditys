import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import PhoneInput from "../src/client/components/phone-input";

storiesOf("Phone input", module).add("Basic", () => <PhoneInput />);
