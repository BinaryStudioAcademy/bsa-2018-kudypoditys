import React, {Fragment} from "react";
import {Table, Icon} from "semantic-ui-react";


const count = 30;

const statusCell = count => {
    const inputs = [];
    for (let index = 0; index < count; index++) {
        const element = (
            <Table.Cell key={index}>
                <Icon color="green" name="checkmark" size="large"/>
            </Table.Cell>
        );
        inputs.push(element);
    }
    return inputs;
};

const listItems = statusCell(count);

export class DrawStatus extends React.Component {
    render() {
        return listItems;
    }
}
