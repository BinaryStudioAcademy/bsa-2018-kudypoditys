import React, { Fragment } from "react";
import { Table, Input } from "semantic-ui-react";

const count = 30;

export class DrawCount extends React.Component {
    // listItems = () => {
    //     let inputs = [];
    //     for (let index = 0; index < count; index++) {
    //         inputs.push(
    //             <Table.Cell key={index}>
    //                 <Input
    //                     name={index}
    //                     className={"table-rooms-input"}
    //                     size={"mini"}
    //                     value={
    //                         this.props.availability[index]
    //                             ? this.props.availability[index].amount
    //                             : this.props.defaultAmount}
    //                     onChange={this.props.onAmountChange}
    //                 />
    //             </Table.Cell>
    //         );
    //     }
    //     return inputs;
    // };

    onAmountChange= (date, e, data) => {
        this.props.onAmountChange(date, e, data)
    };

    listItems = () => {
        return this.props.days.map( (day,index) => {
            const fullDate = day.fullDate;
            const context = this.props.context;
            return (
                <Table.Cell key={index}>
                    <Input
                        name={index}
                        className={"table-rooms-input"}
                        size={"mini"}
                        value={
                            this.props.availability[index]
                                ? this.props.availability[index].amount
                                : this.props.defaultAmount}
                        onChange={
                            this.props.onAmountChange.bind(context, fullDate)
                        }

                    />
                </Table.Cell>
            )
        });
    };

    render() {
        return <Fragment>{this.listItems()} </Fragment>;
    }
}
