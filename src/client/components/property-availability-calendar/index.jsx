import React, { Fragment } from "react";
import { Table, Button, Icon, Header, Message } from "semantic-ui-react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "./container";
import { DrawCount } from "./drawCount";
import { DrawReservations } from "./drawReservations";
import { DrawPrices } from "./drawPrices";
import { DrawStatus } from "./drawStatus";
import moment from "moment";

import "./index.scss";

export class AvailabilityCalendar extends React.Component {
    submitHandle = data => {
        console.log("Submit");
    };

    // roomAmountChanged = (e, { name, value, defaultValue }) => {
    //     // console.log(e);
    //     // console.log(name);
    //     console.log(defaultValue);
    //     console.log(value);
    //     // if (this.props[0].rooms[0].amount !== defaultValue) {
    //     // } else {
    //     //     console.log("ADD");
    //     //     this.setState({
    //     //         add: [
    //     //             ...this.state.add,
    //     //             {
    //     //                 id: this.props[0].rooms[0].id,
    //     //                 propertyId: this.props[0].id,
    //     //                 amount: value,
    //     //                 availabilityStart: name
    //     //             }
    //     //         ]
    //     //     });
    //     // }
    // };

    componentWillMount() {
        // this.props.fetchUserInfo(this.props.userId);
    }

    handleAmountChange = (e, { name, value }) => {
        // console.log("Change", e, "\n");
        // console.log("E");
        // console.log("name = ", name);
        // console.log("value = ", value);
        // console.log("avail = ", this.props.rooms[0]);
        const data = this.props.rooms[0].availabilities[name];
        data.amount = value;

        this.props.handleUpdate(data);
    };

    handlePriceChange = (e, { name, value }) => {
        // console.log("Change", e, "\n");
        // console.log("E");
        // console.log("name = ", name);
        // console.log("value = ", value);
        // console.log("avail = ", this.props.rooms[0]);
        const data = this.props.rooms[0].availabilities[name];
        data.price = value;

        this.props.handleUpdate(data);
    };

    getDaysArrayByMonth() {
        let daysInMonth = moment().daysInMonth();
        const arrDays = [];

        while (daysInMonth) {
            let current = {
                name: moment()
                    .date(daysInMonth)
                    .format("dd"),
                number: moment()
                    .date(daysInMonth)
                    .format("DD"),
                fullDate: moment().date(daysInMonth)
            };
            arrDays.push(current);
            daysInMonth--;
        }
        return arrDays.reverse();
    }

    render() {
        const daysArray = this.getDaysArrayByMonth();
        return (
            <Fragment>
                <Message info>
                    This is the calendar for booking your rooms.
                </Message>
                <div style={{ overflow: "auto" }}>
                    {/* {console.log(this.props.rooms[0])} */}
                    <Table compact celled padded>
                        <Table.Header>
                            <Table.Row style={{ textAlign: "center" }}>
                                <Table.HeaderCell />
                                {daysArray.map((day, index) => (
                                    <Table.HeaderCell key={index}>
                                        {day.name}
                                        <br /> {day.number}
                                    </Table.HeaderCell>
                                ))}
                            </Table.Row>
                        </Table.Header>

                        <Table.Body style={{ textAlign: "center" }}>
                            {/* <Table.Row>
                                <Table.Cell collapsing>Room status</Table.Cell>
                                <DrawStatus />
                            </Table.Row> */}
                            <Table.Row>
                                <Table.Cell collapsing>
                                    Number of rooms
                                </Table.Cell>
                                <DrawCount
                                    onAmountChange={this.handleAmountChange}
                                    // amount={this.props.rooms[0].amount}
                                    availability={
                                        this.props.rooms[0].availabilities
                                    }
                                    days={daysArray}
                                />
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell collapsing>
                                    Active reservations
                                </Table.Cell>
                                <DrawReservations
                                    reservations={
                                        this.props.rooms[0].reservations
                                    }
                                />
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell collapsing>Price</Table.Cell>
                                <DrawPrices
                                    availability={
                                        this.props.rooms[0].availabilities
                                    }
                                    onPriceChange={this.handlePriceChange}
                                />
                            </Table.Row>
                        </Table.Body>
                        <Table.Footer fullWidth>
                            {/* <Table.Row> */}
                            {/* <Table.HeaderCell /> */}
                            {/* <Table.HeaderCell colSpan="1">
                                    <Button
                                        floated="left"
                                        icon
                                        labelPosition="left"
                                        primary
                                        size="small"
                                        onClick={this.submitHandle}
                                    >
                                        <Icon name="save outline" /> Save
                                    </Button>
                                </Table.HeaderCell>
                            </Table.Row> */}
                        </Table.Footer>
                    </Table>
                    <br />
                </div>
            </Fragment>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AvailabilityCalendar);
