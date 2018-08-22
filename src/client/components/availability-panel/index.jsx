import React from "react";
import PropTypes from "prop-types";
import "./index.scss";
import { Header, Button, Form, Dropdown } from "semantic-ui-react";
import moment from "moment";
import { DateRangePicker } from "react-dates";

import { mapStateToProps, mapDispatchToProps } from "./container";
import { connect } from "react-redux";

export class AvailabilityPanel extends React.Component {
    constructor(props) {
        super(props);
        const { checkIn, checkOut } = this.props;
        this.state = {
            startDate: checkIn === null ? moment() : moment(checkIn),
            endDate:
                checkOut === null ? moment().add(5, "days") : moment(checkOut),
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
        if (selectedDates.startDate && selectedDates.endDate) {
            this.props.onDatesChange(selectedDates);
        }

        this.setState(selectedDates);
    };

    render() {
        const { propertyName, adults, children, rooms } = this.props;
        const selectOptions = this.generateOptions(1, 10);
        const childrenOptions = this.generateOptions(0, 10);

        return (
            <div className="availability-panel-wrp">
                <Header as="h2">Availability</Header>
                <div className="availability-panel">
                    <p>When would you like to stay at {propertyName}?</p>
                    <Form
                        className="availability-form"
                        onSubmit={this.props.onAvailabilityCheck}
                    >
                        <div
                            className="availability-form-midsection"
                            onFocus={this.hideRoomSelector}
                        >
                            <DateRangePicker
                                startDateId="startDate"
                                endDateId="endDate"
                                required={true}
                                startDate={this.state.startDate}
                                endDate={this.state.endDate}
                                onDatesChange={this.datesChanged}
                                focusedInput={this.state.focusedInput}
                                onFocusChange={focusedInput => {
                                    this.setState({ focusedInput });
                                }}
                            />
                            <div className="btn-wrp">
                                <Button
                                    type="submit"
                                    content="Check availability"
                                    primary
                                />
                            </div>
                        </div>
                        <Form.Group className="room-selector" inline>
                            <Form.Field inline>
                                <label>Rooms</label>
                                <Dropdown
                                    fluid
                                    selection
                                    name="rooms"
                                    options={selectOptions}
                                    value={rooms}
                                    onChange={(event, input) =>
                                        this.props.onRoomsChange(input.value)
                                    }
                                />
                            </Form.Field>
                            <Form.Field inline>
                                <label>Adults</label>
                                <Dropdown
                                    fluid
                                    selection
                                    name="adults"
                                    options={selectOptions}
                                    value={adults}
                                    onChange={(event, input) =>
                                        this.props.onAdultsChange(input.value)
                                    }
                                />
                            </Form.Field>
                            <Form.Field inline>
                                <label>Children</label>
                                <Dropdown
                                    fluid
                                    selection
                                    name="children"
                                    options={childrenOptions}
                                    value={children}
                                    onChange={(event, input) =>
                                        this.props.onChildrenChange(input.value)
                                    }
                                />
                            </Form.Field>
                        </Form.Group>
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
