import React, { Component } from "react";
import { Card, Icon } from "semantic-ui-react";
import Slider from "client/components/slider";
export class MapPropertyItem extends Component {
    nameClicked = () => {
        console.log("Name clicked");
    };

    render() {
        return (
            <Card style={{ minWidth: "400px" }}>
                <Slider
                    dotsEnable={false}
                    style={{ marginTop: "13%" }}
                    pics={this.props.pics}
                    slideIndex={0}
                />
                <Card.Content>
                    <Card.Header>
                        <a tabIndex="0" onClick={this.nameClicked}>
                            {this.props.propertyName}
                        </a>
                    </Card.Header>
                    <Card.Meta>
                        <span className="address">
                            {this.props.propertyAddress}
                        </span>
                    </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                    <a style={{ float: "right" }}>
                        <Icon name="money" />
                        {this.props.price}
                    </a>
                    <a style={{ float: "left" }}>
                        <Icon name="star" />
                        {this.props.rating}
                    </a>
                </Card.Content>
            </Card>
        );
    }
}

export default MapPropertyItem;
