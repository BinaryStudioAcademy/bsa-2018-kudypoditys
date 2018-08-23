import React, {Component} from "react";
import "./index.scss";

import {Button, Modal} from "semantic-ui-react";
import MapView from "../map-view";

export default class MapWidgetModal extends Component {
    static defaultProps = {
        latitude: -34.397,
        longitude: 150.644,
        buttonText: "Show on map"
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
                            style={{border: 0, }}
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
                            zoom={13}
                            controlEnable={true}
                        />
                        );
                    </Modal.Content>
                </Modal>
            </React.Fragment>
        );
    }
}
