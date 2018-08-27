import React from "react";
import { Table, Label } from "semantic-ui-react";
import moment from "moment";

const daysInMonth = moment().daysInMonth();

export class DrawReservations extends React.Component {
    reservationsInput = () => {
        const { reservations } = this.props;
        const labels = [];
        for (let index = 0; index < daysInMonth; index++) {
            const element = (
                <Table.Cell key={index}>
                    <Label className={"table-reservations-label"}>0</Label>
                </Table.Cell>
            );
            labels.push(element);
        }
        return labels;
    };

    render() {
        return this.reservationsInput();
    }
}
