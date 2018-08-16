import React, { Component, Fragment } from "react";
import { Button } from "semantic-ui-react";
import Slider from "client/components/slider";
import { PropertySummary } from "../property-summary";
export class MapPropertyItem extends Component {
    nameClicked = () => {
        console.log("Name clicked");
    };

    checkPlacesClicked = () => {
        console.log("Check places clicked");
    };

    handleSlideChange = index => {
        console.log(`Slide changed to ${index}`);
    };

    render() {
        return (
            <Fragment>
                <div style={{ marginTop: "1%" }}>
                    <Slider
                        dotsEnable={false}
                        style={{ marginTop: "13%" }}
                        pics={this.props.pics}
                        handleSlideChange={this.handleSlideChange}
                        slideIndex={0}
                    />
                </div>
            </Fragment>
        );
    }
}

export default MapPropertyItem;
