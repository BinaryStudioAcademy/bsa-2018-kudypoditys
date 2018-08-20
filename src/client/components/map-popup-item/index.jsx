import React, { Component } from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import PropTypes from "prop-types";

export class MapPropertyItem extends Component {

    render() {
        return (
            <Card
            >
                <Card.Content>
                    <Card.Header>
                            {this.props.propertyName}
                    </Card.Header>
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

MapPropertyItem.propTypes = {
    imageSrc: PropTypes.string,
    propertyName: PropTypes.string,
    propertyAddress: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.string
};

export default MapPropertyItem;
