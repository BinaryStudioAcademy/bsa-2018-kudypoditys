import React from "react";
import PropTypes from "prop-types";
import "./index.scss";
import {
    Header,
    Button,
    Form,
    Dropdown,
    Message,
    Label
} from "semantic-ui-react";
import moment from "moment";
import { DateRangePicker } from "react-dates";

import Modal from ".././modal";
import { mapStateToProps, mapDispatchToProps } from "./container";
import { connect } from "react-redux";
import RoomsSummaryTable from "../rooms-summary-table";

export class AvailabilityPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            focusedInput: null
        };
    }

    generateOptions = (from, to) => {
        let options = [];
        for (let i = from; i <= to; i++) {
            options.push({
                text: `${i}`,
                value: i
            });
        }
        return options;
    };

    datesChanged = selectedDates => {
        this.props.onDatesChange(this.props.propertyId, selectedDates);
    };

    render() {
        const {
            propertyName,
            propertyId,
            adults,
            children,
            rooms,
            checkIn,
            checkOut,
            error,
            result
        } = this.props;
        const selectOptions = this.generateOptions(1, 10);
        const childrenOptions = this.generateOptions(0, 10);
        const startDate = checkIn === null ? null : moment(checkIn);
        const endDate = checkOut === null ? null : moment(checkOut);

        return (
            <div className="availability-panel-wrp">
                <Header
                    as="h2"
                    style={{
                        paddingLeft: "7px",
                        color: "#465672",
                        cursor: "default"
                    }}
                >
                    Availability
                </Header>
                <div className="availability-panel">
                    <p style={{ textAlign: "center", margin: "10px" }}>
                        When would you like to stay at {propertyName}?
                    </p>
                    <Form
                        className="availability-form"
                        onSubmit={() => {
                            this.props.onAvailabilityCheck({
                                propertyId,
                                adults,
                                children,
                                rooms,
                                checkIn,
                                checkOut
                            });
                        }}
                    >
                        <div
                            className="availability-form-midsection"
                            onFocus={this.hideRoomSelector}
                        >
                            <div style={{ width: "265px" }}>
                                <label
                                    style={{
                                        fontSize: ".92857143em",
                                        fontWeight: "700",
                                        fontFamily: `Lato,'Helvetica Neue',Arial,Helvetica,sans-serif`,
                                        lineHeight: "1.5",
                                        color: "#274560",
                                        display: "block",
                                        padding: "11px"
                                    }}
                                >
                                    Check-in and check-out
                                </label>
                                <DateRangePicker
                                    startDateId="startDate"
                                    endDateId="endDate"
                                    startDate={startDate}
                                    endDate={endDate}
                                    onDatesChange={this.datesChanged}
                                    focusedInput={this.state.focusedInput}
                                    onFocusChange={focusedInput => {
                                        this.setState({ focusedInput });
                                    }}
                                />
                            </div>
                            <Form.Group className="room-selector" inline>
                                <Form.Field>
                                    <label>Rooms</label>
                                    <Dropdown
                                        fluid
                                        selection
                                        name="rooms"
                                        options={selectOptions}
                                        value={rooms}
                                        onChange={(event, input) =>
                                            this.props.onRoomsChange(
                                                input.value
                                            )
                                        }
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <label>Adults</label>
                                    <Dropdown
                                        fluid
                                        selection
                                        name="adults"
                                        options={selectOptions}
                                        value={adults}
                                        onChange={(event, input) =>
                                            this.props.onAdultsChange(
                                                input.value
                                            )
                                        }
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <label>Children</label>
                                    <Dropdown
                                        fluid
                                        selection
                                        name="children"
                                        options={childrenOptions}
                                        value={children}
                                        onChange={(event, input) =>
                                            this.props.onChildrenChange(
                                                input.value
                                            )
                                        }
                                    />
                                </Form.Field>
                            </Form.Group>
                        </div>

                        <Modal
                            trigger={
                                <div className="btn-wrp">
                                    <Button
                                        style={{ width: "100%" }}
                                        type="submit"
                                        content="Check availability"
                                        primary
                                    />
                                </div>
                            }
                        >
                            {error ? (
                                <Message negative>{error}</Message>
                            ) : !result ? null : result.length ? (
                                <React.Fragment>
                                    <Header as="h3">
                                        Rooms available for these dates:{" "}
                                    </Header>
                                    <RoomsSummaryTable rooms={result} />
                                </React.Fragment>
                            ) : (
                                <Message negative>
                                    Sorry, no rooms available for these dates
                                </Message>
                            )}
                        </Modal>
                    </Form>
                </div>
            </div>
        );
    }
}

AvailabilityPanel.propTypes = {
    propertyName: PropTypes.string.isRequired,
    checkIn: PropTypes.instanceOf(Date),
    checkOut: PropTypes.instanceOf(Date),
    adults: PropTypes.number,
    children: PropTypes.number,
    rooms: PropTypes.number,
    onDatesChange: PropTypes.func.isRequired,
    onAdultsChange: PropTypes.func.isRequired,
    onChildrenChange: PropTypes.func.isRequired,
    onRoomsChange: PropTypes.func.isRequired,
    onAvailabilityCheck: PropTypes.func.isRequired
};

AvailabilityPanel.defaultProps = {
    checkIn: null,
    checkOut: null,
    adults: 1,
    children: 0,
    rooms: 1
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AvailabilityPanel);
