import React, { Component } from "react";
import { connect } from 'react-redux';
import { Card, Icon, Image } from "semantic-ui-react";
import PropTypes from "prop-types";
import { convert } from "../../helpers/convertCurrency";


export class MapPopupItem extends Component {

    render() {
        const propertyCurrency = this.props.propertyCurrency;
        const currency = this.props.currency;

        const price = convert(propertyCurrency, this.props.price, currency.code);


        return (


            <Card
                style={{
                    minWidth: "100px",

                }}
            >
                <Image centered src={this.props.imageSrc} size="medium" />
                {/*<Icon*/}
                {/*style={{*/}
                {/*position: "absolute",*/}
                {/*right: "1%",*/}
                {/*top: "1%",*/}
                {/*textAlign: "right",*/}
                {/*color: "white"*/}
                {/*}}*/}
                {/*name="close"*/}
                {/*size="large"*/}
                {/*onClick={this.props.closeClicked}*/}
                {/*/>*/}
                <Card.Content>
                    <Card.Header style={{ textAlight: "center" }}>
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
                    <a style={{ float: "right", border: "none" }}>
                        {currency.code} {price}
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

MapPopupItem.propTypes = {
    propertyName: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.string
};

export default connect((state) => ({
    currency: state.header.selectedCurrency
}))(MapPopupItem);
{/*<Card*/ }
{/*>*/ }
{/*<Card.Content>*/ }
{/*<Card.Header>*/ }
{/*{this.props.propertyName}*/ }
{/*</Card.Header>*/ }
{/*</Card.Content>*/ }
{/*<Card.Content extra>*/ }
{/*<a style={{float: "right"}}>*/ }
{/*<Icon name="money"/>*/ }
{/*{this.props.price}*/ }
{/*</a>*/ }
{/*<a style={{float: "left"}}>*/ }
{/*<Icon name="star"/>*/ }
{/*{this.props.rating}*/ }
{/*</a>*/ }
{/*</Card.Content>*/ }
{/*</Card>*/ }