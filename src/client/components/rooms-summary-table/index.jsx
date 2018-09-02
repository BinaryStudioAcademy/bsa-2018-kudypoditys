import React from "react";
import "./index.scss";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";
import { Table, Icon, Popup, Divider } from "semantic-ui-react";
import BookingForm from "../booking-form";
import Modal from "../modal";

export class RoomsSummaryTable extends React.Component {
    getBedsSummary = bedsInRoom => {
        let result = "";
        for (let i = 0; i < bedsInRoom.length; i++) {
            result += bedsInRoom[i].bedType.name;
        }
        const bedsTotal = bedsInRoom.length;

        return bedsInRoom.map((bed, index) => {
            if (bedsTotal - 1 !== index)
                return (
                    <React.Fragment>
                        <span key={index} style={{ color: "#465672" }}>
                            {bed.count} {bed.bedType.name}
                        </span>
                        <Divider />
                    </React.Fragment>
                );
            else
                return (
                    <span key={index} style={{ color: "#465672" }}>
                        {bed.count} {bed.bedType.name}
                    </span>
                );
        });
    };

    getRoomsSummary = (rooms, bookButton, property) => {
        return rooms.map(room => (
            <div className="room-row">
                <div className="room-row--left-section">
                    <Popup
                        style={{
                            height: "fit-content",
                            overflow: "hidden"
                        }}
                        trigger={
                            <p
                                style={{
                                    margin: "0",
                                    cursor: "pointer",
                                    color: "#465672",
                                    width: "50px",
                                    fontSize: "18px"
                                }}
                            >
                                {room.bedInRooms.length + " "}
                                <Icon name="bed" />
                            </p>
                        }
                        content={this.getBedsSummary(room.bedInRooms)}
                        hoverable
                    />
                    <p
                        style={{
                            margin: "0",
                            color: "#465672",
                            fontSize: "18px"
                        }}
                    >
                        {room.roomType.name}
                    </p>
                </div>
                <div className="room-row--right-section">
                    <p
                        style={{
                            margin: "0",
                            color: "rgb(0, 168, 130)",
                            fontSize: "18px",
                            fontWeight: "bold"
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
                                        height: "100%",
                                        width: "150px",
                                        paddingLeft: "10px",
                                        margin: "0"
                                    }}
                                >
                                    <button>Book now</button>
                                </div>
                            }
                            onClose={this.props.clearBookingForm}
                        >
                            {" "}
                            <BookingForm
                                rooms={property.rooms}
                                paymentTypes={property.paymentTypes}
                            />
                        </Modal>
                    ) : null}
                </div>
            </div>
        ));
    };

    render() {
        const { rooms, user, property } = this.props;
        let bookButton = false;
        if (user) bookButton = true;

        return (
            <div className="rooms-summary-table">
                {this.getRoomsSummary(rooms, bookButton, property)}
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RoomsSummaryTable);
