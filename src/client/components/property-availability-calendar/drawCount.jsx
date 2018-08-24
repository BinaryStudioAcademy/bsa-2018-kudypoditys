import React from "react";
import { Table, Input } from "semantic-ui-react";

const count = 31;

const roomInput = count => {
    const inputs = [];
    for (let index = 0; index < count; index++) {
        const element = (
            <Table.Cell key={index}>
                <Input
                    className={"table-rooms-input"}
                    size={"mini"}
                    defaultValue="15"
                />
            </Table.Cell>
        );
        inputs.push(element);
    }
    return inputs;
};

const listItems = roomInput(count);

export class DrawCount extends React.Component {
    render() {
        return listItems;
    }
}
