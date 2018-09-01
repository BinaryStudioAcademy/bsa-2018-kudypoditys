import React from "react";
import { Table, Label } from "semantic-ui-react";

const count = 31;

export class DrawPrices extends React.Component {
    priceInput = count => {
        const inputs = [];
        for (let index = 0; index < count; index++) {
            const element = (
                <Table.Cell key={index}>
                    <Label className={"table-price"}>{this.props.price}</Label>
                </Table.Cell>
            );
            inputs.push(element);
        }
        return inputs;
    };
    listItems = this.priceInput(count);
    render() {
        return this.listItems;
    }
}
