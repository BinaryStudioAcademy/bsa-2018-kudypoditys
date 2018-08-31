import React from "react";
import "./index.scss";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";
import { Table, Icon, Popup, Divider } from "semantic-ui-react";
import ModalWindow from "./modal.jsx";

export default class RoomsSummaryTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
            modalInfo: "",
            modalTitle: ""
        };
    }

    handleItemClick(info, title) {
        this.setState({
            modalInfo: info,
            modalOpen: true,
            modalTitle: title
        });
    }

    onModalClose() {
        this.setState({ modalOpen: false });
    }

    showPrice(id) {
        this.props.showRoomPrice(id);
    }

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
                        <span key={index}>
                            {bed.count} {bed.bedType.name}
                        </span>
                        <Divider />
                    </React.Fragment>
                );
            else
                return (
                    <span key={index}>
                        {bed.count} {bed.bedType.name}
                    </span>
                );
        });
    };

    getRoomsSummary = rooms => {
        return rooms.map(room => (
            <Table.Row key={room.id}>
                <Table.Cell className="room-sleeps">
                    <Popup
                        style={{
                            height: "fit-content",
                            overflow: "hidden"
                        }}
                        trigger={
                            <h4 style={{ cursor: "pointer" }}>
                                {room.bedInRooms.length}
                            </h4>
                        }
                        content={this.getBedsSummary(room.bedInRooms)}
                        hoverable
                        pointing
                    />
                </Table.Cell>
                <Table.Cell className="room-info">
                    <h4>{room.roomType.name}</h4>
                </Table.Cell>
                <Table.Cell>
                    US <Icon name="dollar" />
                    {room.price}
                </Table.Cell>
            </Table.Row>
        ));
    };

    render() {
        const { rooms } = this.props;

        return (
            <div className="rooms-summary-table">
                <Table basic="very" celled collapsing>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Beds</Table.HeaderCell>
                            <Table.HeaderCell>Room Type</Table.HeaderCell>
                            <Table.HeaderCell>Price</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>{this.getRoomsSummary(rooms)}</Table.Body>
                </Table>
                <ModalWindow
                    modalOpen={this.state.modalOpen}
                    onClose={this.onModalClose.bind(this)}
                    header={this.state.modalTitle}
                    info={this.state.modalInfo}
                />
            </div>
        );
    }
}
