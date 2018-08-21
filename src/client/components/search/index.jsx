import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { connect } from "react-redux";
import { Input, Button, Form, Dropdown, Header, Grid } from "semantic-ui-react";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";

import "react-dates/lib/css/_datepicker.css";

import { mapStateToProps, mapDispatchToProps } from "./container";
import "./index.scss";

export class Search extends React.Component {
    constructor(props) {
        super(props);
        this.roomSelector = React.createRef();
        this.state = {
            startDate: moment(),
            endDate: moment().add(5, "days"),
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

    toggleRoomSelector = () => {
        this.roomSelector.current.classList.toggle("hidden");
    };

    hideRoomSelector = () => {
        this.roomSelector.current.classList.add("hidden");
    };

    adultsOutput = () => {
        if (this.props.adults === 1) return "1 Adult";
        return `${this.props.adults} Adults`;
    };

    childrenOutput = () => {
        switch (this.props.children) {
            case 0:
                return "No children";
            case 1:
                return "1 Child";
            default:
                return `${this.props.children} Children`;
        }
    };

    roomsOutput = () => {
        if (this.props.rooms === 1) return "1 Room";
        return `${this.props.rooms} Rooms`;
    };

    handleSubmit = () => {
        this.props.onSearch();
    };

    render() {
        const selectOptions = this.generateOptions(1, 10);
        const childrenOptions = this.generateOptions(0, 10);
        const {
            destination,
            checkIn,
            checkOut,
            rooms,
            adults,
            children
        } = this.props;
        console.log(this.state);
        return (
            <Form
                className="search search--view-bar"
                onSubmit={this.handleSubmit}
            >
                <div className="destination">
                    <Input
                        name="destination"
                        placeholder="Where are you going?"
                        value={destination}
                        onChange={(event, input) =>
                            this.props.onDestinationChange(input.value)
                        }
                        onFocus={this.hideRoomSelector}
                        required
                    />
                </div>
                <div className="check-in-out">
                    <DateRangePicker
                        noBorder={true}
                        startDateId="startDate"
                        endDateId="endDate"
                        required={true}
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        onDatesChange={({ startDate, endDate }) => {
                            this.setState({ startDate, endDate });
                        }}
                        focusedInput={this.state.focusedInput}
                        onFocusChange={focusedInput => {
                            this.setState({ focusedInput });
                        }}
                    />
                </div>

                <div className="room-options">
                    <Input
                        value={`${this.adultsOutput()} · ${this.childrenOutput()}`}
                        onClick={this.toggleRoomSelector}
                    />
                    <div
                        ref={this.roomSelector}
                        className="room-selector hidden"
                        onMouseLeave={this.hideRoomSelector}
                    >
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={4} verticalAlign={"middle"}>
                                    <label>Rooms</label>
                                </Grid.Column>
                                <Grid.Column width={12}>
                                    <Dropdown
                                        compact
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
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={4} verticalAlign={"middle"}>
                                    <label>Adults</label>
                                </Grid.Column>
                                <Grid.Column width={12}>
                                    <Dropdown
                                        compact
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
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={4} verticalAlign={"middle"}>
                                    <label>Children</label>
                                </Grid.Column>
                                <Grid.Column width={12}>
                                    <Dropdown
                                        compact
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
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </div>
                </div>

                <div className="btn-wrp">
                    <Button type="submit" content="Search" primary />
                </div>
            </Form>
        );
    }
}

Search.propTypes = {
    view: PropTypes.string.isRequired,
    destination: PropTypes.string,
    checkIn: PropTypes.number,
    checkOut: PropTypes.number,
    adults: PropTypes.number,
    children: PropTypes.number,
    rooms: PropTypes.number,
    onDestinationChange: PropTypes.func.isRequired,
    onCheckInChange: PropTypes.func.isRequired,
    onCheckOutChange: PropTypes.func.isRequired,
    onAdultsChange: PropTypes.func.isRequired,
    onChildrenChange: PropTypes.func.isRequired,
    onRoomsChange: PropTypes.func.isRequired
};

Search.defaultProps = {
    destination: "",
    checkIn: null,
    checkOut: null,
    adults: 1,
    children: 0,
    rooms: 1
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);
