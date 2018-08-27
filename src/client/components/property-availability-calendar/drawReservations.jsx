import React from "react";
import { Table, Label } from "semantic-ui-react";
import moment from "moment";

const daysInMonth = moment().daysInMonth();

const { reservations } = this.props;

const reservationsInput = () => {
    const inputs = [];
    for (let index = 0; index < daysInMonth; index++) {
        const element = (
            <Table.Cell key={index}>
                <Label className={"table-reservations-label"}>0</Label>
            </Table.Cell>
        );
        inputs.push(element);
    }
    return inputs;
};

const listItems = reservationsInput();

export class DrawReservations extends React.Component {
    render() {
        return listItems;
    }
}
