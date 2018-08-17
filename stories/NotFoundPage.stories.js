import React from "react";

import { storiesOf } from "@storybook/react";

import { NotFoundPage } from "../src/client/pages/404-page";

storiesOf("404 page", module).add("404 page", () => <NotFoundPage />);
