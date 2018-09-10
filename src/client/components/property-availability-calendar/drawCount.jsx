import React, { Fragment } from "react";
import { Table, Input } from "semantic-ui-react";

const count = 30;

export class DrawCount extends React.Component {
    listItems = () => {
        let inputs = [];
        console.log("List items = ", this.props);
        for (let index = 0; index < count; index++) {
            inputs.push(
                <Table.Cell key={index}>
                    <Input
                        name={index}
                        className={"table-rooms-input"}
                        size={"mini"}
                        value={this.props.availability[index].amount}
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
