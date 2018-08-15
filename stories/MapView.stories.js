import React from "react";

import {storiesOf} from "@storybook/react";
import MapView from "../src/client/components/map-view";
import Modal from "../src/client/components/modal";

const location = {lat: 49.8569857, lng: 24.0180817};

storiesOf("Map View", module)
    .add("Map View", () => <MapView location={location}/>)
    .add("Map View in modal", () => (
        <Modal fullScreen trigger={<button>Show modal</button>}>
            <MapView location={location}/>
        </Modal>
    ));
