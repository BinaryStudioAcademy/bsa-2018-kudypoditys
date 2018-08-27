import React from "react";
import { Table } from "semantic-ui-react";
import moment from "moment";

function getDaysArrayByMonth() {
    let daysInMonth = moment().daysInMonth();
    const arrDays = [];

    while (daysInMonth) {
        let current = {
            name: moment()
                .date(daysInMonth)
                .format("dd"),
            number: moment()
                .date(daysInMonth)
                .format("DD")
        };
        arrDays.push(current);
        daysInMonth--;
    }
    return arrDays.reverse();
}

const daysArray = getDaysArrayByMonth();

const listItems = daysArray.map((day, index) => (
    <Table.HeaderCell key={index}>
        {day.name}
        <br /> {day.number}
    </Table.HeaderCell>
));

export class DrawHeader extends React.Component {
    render() {
        return listItems;
    }
}
