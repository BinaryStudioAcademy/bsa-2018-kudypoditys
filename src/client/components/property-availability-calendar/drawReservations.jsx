import React from "react";
import { Table, Label } from "semantic-ui-react";

const count = 31;

const reservationsInput = count => {
    const inputs = [];
    for (let index = 0; index < count; index++) {
        const element = (
            <Table.Cell key={index}>
                <Label className={"table-reservations-label"}>0</Label>
            </Table.Cell>
        );
        inputs.push(element);
    }
    return inputs;
};

const listItems = reservationsInput(count);

export class DrawReservations extends React.Component {
    render() {
        return listItems;
    }
}
