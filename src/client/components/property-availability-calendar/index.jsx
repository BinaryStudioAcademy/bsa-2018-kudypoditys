import React, { Fragment } from "react";
import {
    Table,
    Button,
    Icon,
    Header,
    Message,
    Dimmer,
    Dropdown
} from "semantic-ui-react";
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
        this.props.handleSubmit(this.props.selectedRoom.availabilities);
    };

    handleAmountChange = (e, { name, value }) => {
        const data = this.props.selectedRoom.availabilities[name];
        data.amount = value;

        this.props.handleUpdate(data);
    };

    handlePriceChange = (e, { name, value }) => {
        const data = this.props.selectedRoom.availabilities[name];
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

    selectedRoomChange = (e, { value }) => {
        this.props.selectedRoomChange(this.props.rooms[value]);
    };

    getRoomsOptions() {
        const { rooms } = this.props;
        const options = rooms.map((room, index) => {
            return {
                key: index,
                text: room.roomType.name,
                value: index
            };
        });
        return options;
    }

    componentWillMount() {
        this.props.selectedRoomChange(this.props.rooms[0]);
    }

    render() {
        const daysArray = this.getDaysArrayByMonth();
        return (
            <Fragment>
                <Message info>
                    This is the calendar for booking your rooms.
                </Message>
                <Dimmer />
                <p className="room-p">Room</p>
                <Dropdown
                    name="room"
                    // fluid
                    selection
                    onChange={this.selectedRoomChange}
                    defaultValue={0}
                    options={this.getRoomsOptions()}
                />
                <Dimmer />
                <div style={{ overflow: "auto" }}>
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
                                        this.props.selectedRoom.availabilities
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
                                        this.props.selectedRoom.reservations
                                    }
                                />
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell collapsing>Price</Table.Cell>
                                <DrawPrices
                                    availability={
                                        this.props.selectedRoom.availabilities
                                    }
                                    onPriceChange={this.handlePriceChange}
                                />
                            </Table.Row>
                        </Table.Body>
                        <Table.Footer fullWidth>
                            {/* <Table.Row>
                                <Table.HeaderCell />
                                <Table.HeaderCell colSpan="1">
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
                </div>
            </Fragment>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AvailabilityCalendar);
