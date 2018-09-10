import React, { Component } from "react";
import "./index.scss";

import { Button, Modal } from "semantic-ui-react";
import MapView from "../map-view";

export default class MapWidgetModal extends Component {
    static defaultProps = {
        buttonText: "Show on map"
    };

    render() {
       const {fullScreen} = this.props;
        return (
            <React.Fragment>
                <Modal
                    style={{ width: "100%", height: "100%" }}
                    trigger={
                        <Button
                            basic
                            size="tiny"
                            className={this.props.buttonClass}
                            style={{ border: 0 }}
                        >
                            {this.props.buttonText}
                        </Button>
                    }
                    closeIcon
                    className="map-widget-modal"
                >
                    <Modal.Content style={{ width: "100%", height: "100%" }}>
                        <MapView

                            properties={this.props.properties}
                            startPosition={this.props.startPosition}
                            zoom={13}
                            controlEnable={true}
                            style={{
                                width: fullScreen ? "100%" : "default",
                                height: fullScreen ? "100%" : "default"
                            }}
                            width={!fullScreen ? 250 : null}
                            height={!fullScreen ? 250 : null}
                        />
                    </Modal.Content>
                </Modal>
            </React.Fragment>
        );
    }
}
