import React, { Fragment } from "react";
import { Table, Label } from "semantic-ui-react";

const count = 30;

export class DrawPrices extends React.Component {
    drawPrices = () => {
        let inputs = [];
        for (let index = 0; index < count; index++) {
            inputs.push(
                <Table.Cell key={index}>
                    <Label className={"table-price"}>{this.props.price}</Label>
                </Table.Cell>
            );
        }
        return inputs;
    };

    render() {
        return <Fragment>{this.drawPrices()}</Fragment>;
    }
}
