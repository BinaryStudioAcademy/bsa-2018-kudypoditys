import React from "react";
import { Table, Input } from "semantic-ui-react";

const count = 31;

const priceInput = count => {
    const inputs = [];
    for (let index = 0; index < count; index++) {
        const element = (
            <Table.Cell key={index}>
                <Input
                    className={"table-price-input"}
                    size={"mini"}
                    defaultValue="3000"
                />
            </Table.Cell>
        );
        inputs.push(element);
    }
    return inputs;
};

const listItems = priceInput(count);

export class DrawPrices extends React.Component {
    render() {
        return listItems;
    }
}
