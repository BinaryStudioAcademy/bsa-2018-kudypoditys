import React from "react";
import "./index.scss";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";
import { Icon, Popup, Divider } from "semantic-ui-react";
import BookingForm from "../booking-form";
import Modal from "../modal";
import { Header } from "semantic-ui-react";

export class RoomsSummaryTable extends React.Component {
    getBedsSummary = bedsInRoom => {
        const bedsTotal = bedsInRoom.length;

        return (
            <div style={{ padding: "5px" }}>
                {bedsInRoom.map((bed, index) => {
                    return (
                        <span
                            key={index}
                            style={{
                                display: "block",
                                paddingLeft: "23px",
                                color: "#465672"
                            }}
                        >
                            {bed.count} {bed.bedType.name}
                        </span>
                    );
                })}
            </div>
        );
    };

    getRoomsSummary = (rooms, bookButton, property) => {
        return rooms.map(room => (
            <React.Fragment>
                <div className="room-row">
                    <div className="room-row--left-section">
                        <p
                            style={{
                                margin: "0",
                                color: "#465672",
                                fontSize: "18px"
                            }}
                        >
                            <Icon name="bed"/>
                            {" " + room.roomType.name}
                        </p>
                        <p>{this.getBedsSummary(room.bedInRooms)}</p>
                    </div>
                    <div className="room-row--right-section">
                        <p
                            style={{
                                margin: "0",
                                color: "rgb(0, 168, 130)",
                                fontSize: "18px",
                                fontWeight: "bold",
                                alignSelf: "center",
                                paddingRight: "5px"
                            }}
                        >
                            US ${room.price}
                        </p>
                        {bookButton ? (
                            <Modal
                                trigger={
                                    <div
                                        className="book-btn"
                                        style={{
                                            height: "40px",
                                            width: "150px",
                                            paddingLeft: "10px",
                                            margin: "0"
                                        }}
                                    >
                                        <button style={{height: "100%"}}>
                                            Book now
                                        </button>
                                    </div>
                                }
                                onClose={this.props.clearBookingForm}
                                closeIcon
                            >
                                {" "}
                                <BookingForm
                                    rooms={rooms}
                                    paymentTypes={property.paymentTypes}
                                />
                            </Modal>
                        ) : null}
                    </div>
                </div>
                <Divider hidden />
            </React.Fragment>
        ));
    };

    render() {
        const { rooms, user, property } = this.props;
        let bookButton = false;
        if (user) bookButton = true;

        if (!rooms) return null;

        if (rooms.length === 0)
            return (
                <Header
                    as="h3"
                    style={{
                        color: "#d12b2b",
                        cursor: "default",
                        paddingLeft: "15px"
                    }}
                >
                    Sorry we don`t have available rooms here!
                </Header>
            );

        return (
            <div className="rooms-summary-table" style={{ minWidth: "500px" }}>
                {this.getRoomsSummary(rooms, bookButton, property)}
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RoomsSummaryTable);
