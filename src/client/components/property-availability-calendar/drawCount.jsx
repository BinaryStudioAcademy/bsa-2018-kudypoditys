import React, { Fragment } from "react";
import { Table, Input } from "semantic-ui-react";

const count = 30;

export class DrawCount extends React.Component {
    listItems = () => {
        let inputs = [];
        for (let index = 0; index < count; index++) {
            inputs.push(
                <Table.Cell key={index}>
                    <Input
                        name={this.props.days[index].fullDate}
                        className={"table-rooms-input"}
                        size={"mini"}
                        value={this.props.amount}
                        onChange={this.props.onAmountChange}
                    />
                </Table.Cell>
            );
        }
        return inputs;
    };

    render() {
        return <Fragment>{this.listItems()} </Fragment>;
    }
}
