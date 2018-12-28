import React, { Fragment } from "react";
import { Table, Input } from "semantic-ui-react";

export class DrawCount extends React.Component {

    handleChange= (fullDate, e, data) => {
        this.props.onAmountChange(fullDate, e, data)
    };

    listItems = () => {
        return this.props.days.map( (day,index) => {
            const fullDate = day.fullDate;
            const dayNum = fullDate.date();
            const availability = this.props.availability
                .find(av=>{
                    return av.date === dayNum;
                });

            return (
                <Table.Cell key={index}>
                    <Input
                        name={index}
                        className={"table-rooms-input"}
                        size={"mini"}
                        value={
                            availability
                                ? availability.amount
                                : this.props.defaultAmount
                        }
                        onChange={
                            this.handleChange.bind(this, fullDate)
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
