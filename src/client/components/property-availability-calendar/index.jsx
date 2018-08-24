import "./index.scss";
import React from "react";
import { Table, Button, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "./container";
import { DrawHeader } from "./drawHeader";
import { DrawCount } from "./drawCount";
import { DrawReservations } from "./drawReservations";
import { DrawPrices } from "./drawPrices";
import { DrawStatus } from "./drawStatus";

export class AvailabilityCalendar extends React.Component {
    submitHandle = (...data) => {
        console.log(data);
    };

    render() {
        return (
            <div style={{ overflow: "auto" }}>
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
                            <DrawCount />
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell collapsing>
                                Active reservations
                            </Table.Cell>
                            <DrawReservations />
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell collapsing>Price</Table.Cell>
                            <DrawPrices />
                        </Table.Row>
                    </Table.Body>

                    <Table.Footer fullWidth>
                        <Table.Row>
                            {/* <Table.HeaderCell /> */}
                            <Table.HeaderCell colSpan="1">
                                <Button
                                    floated="left"
                                    icon
                                    labelPosition="left"
                                    primary
                                    size="small"
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

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(AvailabilityCalendar);
