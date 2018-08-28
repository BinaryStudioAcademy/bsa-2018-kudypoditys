import React from "react";
import { Table, Label } from "semantic-ui-react";
import moment from "moment";

const daysInMonth = moment().daysInMonth();

export class DrawReservations extends React.Component {
    reservationsInput = () => {
        const { reservations } = this.props;
        const labels = [];
        for (let index = 1; index < daysInMonth + 1; index++) {
            let reservedRooms = 0;
            reservations.map(reserv => {
                let dayIn = moment(reserv.dateIn).format("DD");
                let dayOut = moment(reserv.dateOut).format("DD");
                if (index >= dayIn && index <= dayOut) reservedRooms++;
            });

            const element = (
                <Table.Cell key={index}>
                    <Label className="table-reservations-label">
                        {0 + reservedRooms}
                    </Label>
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
