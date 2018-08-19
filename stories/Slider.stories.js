import React from "react";

import { storiesOf } from "@storybook/react";

import Slider from "client/components/slider";

const pics = [
    "https://picsum.photos/600/302",
    "https://picsum.photos/600/303",
    "https://picsum.photos/600/304",
    "https://picsum.photos/600/305",
    "https://picsum.photos/600/306"
];

const handleSlideChange = index => {
    console.log(`Slide changed to ${index}`);
};

storiesOf("Slider", module)
    .add("Slider With Pictures", () => (
        <Slider pics={pics} handleSlideChange={handleSlideChange} slideId={0} />
    ))
    .add("Slider Without Pictures", () => (
        <Slider pics={[]} handleSlideChange={handleSlideChange} slideId={0} />
    ));
