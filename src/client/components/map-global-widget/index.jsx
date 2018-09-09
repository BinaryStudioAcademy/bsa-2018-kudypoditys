import React, { Component } from 'react';
import PropTypes from "prop-types";
import MapView from '../map-view';


export default class MapGlobalWidget extends Component {
    render() {
        const { fullScreen } = this.props;



        return (
            <React.Fragment>
                <MapView
                    style={{
                        width: fullScreen ? '100%' : 'default',
                        height: fullScreen ? '100%' : 'default',
                    }}
                    width={765}
                    height={550}
                    properties={this.props.properties}
                    startPosition={this.props.startPosition}
                    zoom={13}
                    controlEnable={true}
                />
            </React.Fragment>
        );
    }
}

MapGlobalWidget.defaultProps = {
    startPosition: {
        latitude: 16.469391,
        longitude: 10.746883
    }
};


