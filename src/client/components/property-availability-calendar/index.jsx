import React from "react";
import { Table, Button, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "./container";
import { DrawHeader } from "./drawHeader";
import { DrawCount } from "./drawCount";
import { DrawReservations } from "./drawReservations";
import { DrawPrices } from "./drawPrices";
import { DrawStatus } from "./drawStatus";

import "./index.scss";

export class AvailabilityCalendar extends React.Component {
    submitHandle = data => {
        console.log("Submit");
    };

    roomAmountChanged = data => {
        // console.log(data.target.value);
        console.log(this.props);
        // console.log(mapStateToProps);
        // this.props.handleUpdate(data);
    };

    componentWillMount() {
        this.props.handleUserInfo(1);
    }

    render() {
        return (
            <div style={{ overflow: "auto" }}>
                {console.log("IN RENDER", this.props)}
                <Table compact celled padded>
                    <Table.Header>
                        <Table.Row style={{ textAlign: "center" }}>
                            <Table.HeaderCell />
                            <DrawHeader />
                        </Table.Row>
                    </Table.Header>

                    <Table.Body style={{ textAlign: "center" }}>
                        <Table.Row>
                            <Table.Cell collapsing>Room status</Table.Cell>
                            <DrawStatus />
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell collapsing>Number of rooms</Table.Cell>
                            <DrawCount
                                onAmountChange={this.roomAmountChanged}
                                roomsAmount={this.props.amount}
                            />
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell collapsing>
                                Active reservations
                            </Table.Cell>
                            {/* <DrawReservations
                                reservations={this.props.rooms[0].reservations}
                            /> */}
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell collapsing>Price</Table.Cell>
                            {/* <DrawPrices price={this.props.rooms[0].price} /> */}
                        </Table.Row>
                    </Table.Body>

                    <Table.Footer fullWidth>
                        <Table.Row>
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
                        </Table.Row>
                    </Table.Footer>
                </Table>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AvailabilityCalendar);
