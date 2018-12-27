import React, { Fragment } from "react";
import { Table, Input } from "semantic-ui-react";

export class DrawPrices extends React.Component {

    handleChange= (fullDate, e, data) => {
        this.props.onPriceChange(fullDate, e, data)
    };

    drawPrices = () => {
        return this.props.days.map( (day,index) => {
            const fullDate = day.fullDate;
            const dayNum = fullDate.date();
            const availability = this.props.availability
                .find(av=>{
                    return av.date === dayNum;
                })

            return (
                <Table.Cell key={index}>
                    <Input
                        name={index}
                        className={"table-price"}
                        size={"mini"}
                        value={
                            availability
                                ? availability.price
                                : this.props.defaultPrice
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
        return <Fragment>{this.drawPrices()}</Fragment>;
    }
}
