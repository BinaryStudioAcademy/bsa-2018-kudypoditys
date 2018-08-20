import React, {Component} from "react";
import "./index.scss";

import {Button, Modal} from "semantic-ui-react";
import MapView from "../map-view";

export default class MapWidgetModal extends Component {
    static defaultProps = {
        latitude: -34.397,
        longitude: 150.644,
        buttonText: "ShowOnMap"
    };

    render() {
        return (
            <React.Fragment>
                <Modal
                    trigger={
                        <Button
                            basic
                            size="tiny"
                            className={this.props.buttonClass}
                        >
                            {this.props.buttonText}
                        </Button>
                    }
                    closeIcon
                    className="map-widget-modal"
                >
                    <Modal.Content>
                        <MapView
                            properties={this.props.properties}
                            startPosition={this.props.startPosition}
                            zoom={12}
                            controlEnable={true}
                        />
                        );
                    </Modal.Content>
                </Modal>
            </React.Fragment>
        );
    }
}
