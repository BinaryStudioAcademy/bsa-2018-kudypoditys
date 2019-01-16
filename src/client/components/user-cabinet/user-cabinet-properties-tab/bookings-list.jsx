import React, { Fragment } from "react";
import {
    Table,
    Header,
    Message,
    Divider,
    Dropdown,
    Button
} from "semantic-ui-react";
import moment from "moment";
import Modal from "../../common/modal";
import CancelBookingForm from "./cancelForm";

import "./index.scss";

export class BookingsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedRoom: props.rooms[0] };
    }

    selectedRoomChange = (e, { value }) => {
        const { rooms } = this.props;
        this.setState({ selectedRoom: rooms[value] });
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

    getRows = (reservations, roomType) => {
        if (!reservations.length) return null;
        const rows = reservations.map((reservation, index) => {
            const { user } = reservation;
            return (
                <Table.Row>
                    <Table.Cell collapsing>
                        {moment(reservation.dateIn).format("MMM DD")}
                        <p>{moment(reservation.dateIn).format("dddd, YYYY")}</p>
                    </Table.Cell>
                    <Table.Cell collapsing>
                        {moment(reservation.dateOut).format("MMM DD")}
                        <p>
                            {moment(reservation.dateOut).format("dddd, YYYY")}
                        </p>
                    </Table.Cell>
                    <Table.Cell collapsing>{user.fullName}</Table.Cell>
                    <Table.Cell collapsing>{user.phoneNumber}</Table.Cell>
                    <Table.Cell collapsing>
                        {reservation.guestsCount}
                    </Table.Cell>
                    <Table.Cell collapsing>{roomType}</Table.Cell>
                    <Table.Cell collapsing>
                        <Modal
                            trigger={<Button negative>Cancel</Button>}
                            closeIcon
                        >
                            <CancelBookingForm
                                handleCancelSubmit={value => {
                                    this.props.cancelBooking({
                                        reason: value,
                                        id: reservation.id
                                    });
                                }}
                            />
                        </Modal>
                    </Table.Cell>
                </Table.Row>
            );
        });
        return rows;
    };

    render() {
        const { selectedRoom } = this.state;
        return (
            <Fragment>
                <Message info>This is the list of bookings.</Message>
                <Divider />
                <p className="room-p">Room</p>
                <Dropdown
                    name="room"
                    // fluid
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
                                <Table.HeaderCell>Check In</Table.HeaderCell>
                                <Table.HeaderCell>Check Out</Table.HeaderCell>
                                <Table.HeaderCell>
                                    Customer name
                                </Table.HeaderCell>
                                <Table.HeaderCell>
                                    Customer phone
                                </Table.HeaderCell>
                                <Table.HeaderCell>
                                    Guests Count
                                </Table.HeaderCell>
                                <Table.HeaderCell>Room type</Table.HeaderCell>
                                <Table.HeaderCell />
                            </Table.Row>
                        </Table.Header>

                        <Table.Body style={{ textAlign: "center" }}>
                            {this.getRows(
                                selectedRoom.reservations,
                                selectedRoom.roomType.name
                            )}
                        </Table.Body>
                        {!selectedRoom.reservations.length ? (
                            <Table.Footer fullWidth>
                                <Table.Row>
                                    <Table.HeaderCell colSpan="6">
                                        <Header
                                            textAlign="center"
                                            style={{ margin: "20px" }}
                                        >
                                            No active bookings
                                        </Header>
                                    </Table.HeaderCell>
                                </Table.Row>
                            </Table.Footer>
                        ) : null}
                    </Table>
                </div>
            </Fragment>
        );
    }
}
