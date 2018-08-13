import React from "react";
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps";


const Map = withScriptjs(withGoogleMap((props) => {
        const location = props.location
        return (
            <GoogleMap
                defaultZoom={14}
                center={location}>
                <Marker
                    position={props.location}
                >
                </Marker>
            </GoogleMap>
        );
    }
))
export default Map