import React, { Fragment } from "react";
import { Table, Input } from "semantic-ui-react";

const count = 30;

export class DrawPrices extends React.Component {
    drawPrices = () => {
        let inputs = [];
        for (let index = 0; index < count; index++) {
            inputs.push(
                <Table.Cell key={index}>
                    <Input
                        name={index}
                        className={"table-price"}
                        size={"mini"}
                        value={
                            this.props.availability[index]
                            ? this.props.availability[index].price
                            : this.props.defaultPrice
                        }
                        onChange={this.props.onPriceChange}
                    />
                </Table.Cell>
            );
        }
        return inputs;
    };

    render() {
        return <Fragment>{this.drawPrices()}</Fragment>;
    }
}
