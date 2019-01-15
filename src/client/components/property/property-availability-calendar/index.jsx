import React, { Fragment } from "react";
import {
    Table,
    Button,
    Icon,
    Message,
    Divider,
    Dropdown
} from "semantic-ui-react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "./container";
import { DrawCount } from "./drawCount";
import { DrawReservations } from "./drawReservations";
import { DrawPrices } from "./drawPrices";
import moment from "moment";

import "./index.scss";

export class AvailabilityCalendar extends React.Component {

    submitHandle = data => {
        this.props.handleSubmit(this.props.selectedRoom.availabilities);
    };

    handleAmountChange = (fullDate, e,  {name, value} ) => {
        let data = this.props.selectedRoom.availabilities
            .find(av=>{
                return av.date === fullDate.date()
            });
        if(data){
            data.amount = parseInt(value, 10);
            this.props.handleUpdate(data);
        } else {
            data = {
                amount: parseInt(value, 10),
                // createdAt: new Date().toISOString(),
                date: fullDate.date(),
                dateCal: fullDate.format("YYYY-MM-DD"),
                // id: null,
                price: this.props.selectedRoom.price,
                roomId: this.props.selectedRoom.id,
                // updatedAt: new Date().toISOString(),
            };
            this.props.handleAdd(data);
        }
    };

    handlePriceChange = (fullDate, e, { name, value }) => {
        let data = this.props.selectedRoom.availabilities
            .find(av=>{
                return av.date === fullDate.date()
            });
        if(data){
            data.price = parseInt(value, 10);
            this.props.handleUpdate(data);
        } else {
            data = {
                amount:  this.props.selectedRoom.amount,
                // createdAt: new Date().toISOString(),
                date: fullDate.date(),
                dateCal: fullDate,
                // id: null,
                price: parseInt(value, 10),
                roomId: this.props.selectedRoom.id,
                // updatedAt: new Date().toISOString(),
            };
            this.props.handleAdd(data);
        }
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
                fullDate: moment().date(daysInMonth).hour(0).minute(0).second(0)
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
                <Divider />
                <p className="room-p">Room</p>
                <Dropdown
                    name="room"
                    selection
                    onChange={this.selectedRoomChange}
                    defaultValue={0}
                    options={this.getRoomsOptions()}
                />
                <Divider />
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
                                    defaultAmount={
                                        this.props.selectedRoom.amount
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
                                    defaultPrice={
                                        this.props.selectedRoom.price
                                    }
                                    onPriceChange={this.handlePriceChange}
                                    days={daysArray}
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
                        style={{marginBottom : "10px"}}
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
