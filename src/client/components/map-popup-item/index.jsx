import React, {Component} from "react";
import {Card, Icon} from "semantic-ui-react";
import PropTypes from "prop-types";


export class MapPopupItem extends Component {

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
                    <a style={{float: "right"}}>
                        <Icon name="money"/>
                        {this.props.price}
                    </a>
                    <a style={{float: "left"}}>
                        <Icon name="star"/>
                        {this.props.rating}
                    </a>
                </Card.Content>
            </Card>
        );
    }
}

MapPopupItem.propTypes = {
    propertyName: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.string
};

export default MapPopupItem;
