import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { connect } from "react-redux";
import { Input, Button, Form, Dropdown, Grid, Search } from "semantic-ui-react";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";

import "react-dates/lib/css/_datepicker.css";
import axios from "axios";
import { mapStateToProps, mapDispatchToProps } from "./container";
import "./index.scss";
import _ from "lodash";
import Suggestions from '/suggestions'
//import faker from "faker";

// const source = _.times(5, () => ({
//     title: faker.company.companyName(),
//     description: faker.company.catchPhrase(),
//     image: faker.internet.avatar()
// }));

export class MainSearch extends React.Component {
    constructor(props) {
        super(props);
        this.roomSelector = React.createRef();
        this.state = {
            startDate: moment(),
            endDate: moment().add(5, "days"),
            focusedInput: null,
            query: "",
            results: []
        };
    }
    getInfo = () => {
        axios
            .get("http://127.0.0.1:3000/search?q=" + this.state.query)
            .then(({ response }) => {
                this.setState({
                   // { name: '', results: [{ title: '', description: '' }]

                    results: response.data, //todo
                    isLoading: false
                });
            });
    };
    // handleInputChange = () => {
    //     this.setState(
    //         {isLoading: true,
    //             query: this.search.value
    //         },
    //         () => {
    //             if (this.state.query && this.state.query.length > 1) {
    //                 if (this.state.query.length % 2 === 0) {
    //                     this.getInfo();
    //                 }
    //             }
    //         }
    //     );
    // };
    componentWillMount() {
        this.resetComponent();
    }

    resetComponent = () =>
        this.setState({ isLoading: false, results: [], value: "" });

    handleResultSelect = (e, { result }) =>
        this.setState({ value: result.title });

    handleSearchChange = (e, { value }) => {
        this.setState(
            {
                isLoading: true,
                query: this.search.value
            },
            () => {
                if (this.state.query && this.state.query.length > 1) {
                        this.getInfo();

                }
            }
        );
        // setTimeout(() => {
        //     if (this.state.value.length < 1) return this.resetComponent();

        //     const re = new RegExp(_.escapeRegExp(this.state.value), "i");
        //     const isMatch = result => re.test(result.title);

        //     this.setState({
        //         isLoading: false,
        //         results: _.filter(+, isMatch)
        //     });
        // }, 300);
    };
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

    datesChanged = selectedDates => {
        if (selectedDates.startDate && selectedDates.endDate) {
            this.props.onDatesChange(selectedDates);
        }
        this.setState(selectedDates);
    };

    render() {
        const selectOptionsRooms = this.generateOptions(1, 30);
        const selectOptionsAdults = this.generateOptions(1, 10);
        const { isLoading, value, results } = this.state;
        const childrenOptions = this.generateOptions(0, 10);
        const { rooms, adults, children } = this.props;
        return (
            <Form
                className="search search--view-bar"
                onSubmit={this.handleSubmit}
            >
                <div className="destination">
                    <Search
                        name="destination"
                        placeholder="Where are you going?"
                        loading={isLoading}
                        onResultSelect={this.handleResultSelect}
                        onSearchChange={_.debounce(
                            this.handleSearchChange,
                            500,
                            { leading: true }
                        )}
                        results={results}
                        value={value}
                        {...this.props}
                        required
                    />
                <Suggestions results={this.state.results} />
                </div>
                <div className="check-in-out" onFocus={this.hideRoomSelector}>
                    <DateRangePicker
                        noBorder={true}
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
                </div>

                <div className="room-options">
                    <Input
                        style={{ height: "20px" }}
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
                                        options={selectOptionsRooms}
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
                                        options={selectOptionsAdults}
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

                <div className="btn-wrp" style={{ height: 40, width: 134 }}>
                    <Button
                        style={{ height: 40 }}
                        type="submit"
                        content="Search"
                        primary
                    />
                </div>
            </Form>
        );
    }
}

MainSearch.propTypes = {
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

MainSearch.defaultProps = {
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
)(MainSearch);
