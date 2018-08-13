import React, { Component } from 'react';
import "./index.scss";

import Map from 'client/components/basic-map-widget/map';
import { Button, Modal } from 'semantic-ui-react';

export default class MapWidgetModal extends Component {
    static defaultProps = {
        gmapLocation: { lat: -34.397, lng: 150.644 },
        gmap_url: `https://maps.googleapis.com/maps/api/js?key=AIzaSyA0dkzMEoW2UBi7tA1TVAMbrwCUStF_9xw&v=3.exp&libraries=geometry,drawing,places`
    };

    render() {
        console.log(this.props.gmapLocation);
        return (
            <React.Fragment>
                <Modal
                    trigger={<Button basic size='tiny' className='map-widget-modal-button'>Show On Map</Button>}
                    closeIcon
                    className='map-widget-modal'
                >
                    <Modal.Content>
                        <Map
                            location={this.props.gmapLocation}
                            googleMapURL={this.props.gmap_url}
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: '100%', width: '100%' }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                        />
                    </Modal.Content>

                </Modal>
            </React.Fragment>
        )
    }
}
