import React from "react";
import { Table, Input } from "semantic-ui-react";


const count = 30;

export class DrawCount extends React.Component {
    roomInput = count => {
        const inputs = [];
        for (let index = 0; index < count; index++) {
            const element = (
                <Table.Cell key={index}>
                    <Input
                        className={"table-rooms-input"}
                        size={"mini"}
                        defaultValue={this.props.roomsAmount}
                        onChange={this.props.onAmountChange}
                    />
                </Table.Cell>
            );
            inputs.push(element);
        }
        return inputs;
    };

    listItems = this.roomInput(count);

    render() {
        return this.listItems;
    }
}
