import React from "react";

import {storiesOf} from "@storybook/react";
import MapView from "../src/client/components/map-view";
import Modal from "../src/client/components/modal";

storiesOf("Map View", module)
    .add("Map View with popup", () => (
        <MapView
            latitude={49.837089}
            longitude={24.021161}
            popupText={"1200 грн"}
            zoom={15}
            controlEnable={true}
        />
    ))
    .add("Map View without popup", () => (
        <MapView
            latitude={49.837089}
            longitude={24.021161}
            zoom={15}
            controlEnable={true}
        />
    ))
    .add("Map View disabled control", () => (
        <MapView
            latitude={49.837089}
            longitude={24.021161}
            zoom={15}
            controlEnable={false}
        />
    ))
    .add("Map View in modal", () => (
        <Modal fullScreen trigger={<button>Show modal</button>}>
            <MapView latitude={49.837089} longitude={24.021161} zoom={15} />
        </Modal>
    ));
