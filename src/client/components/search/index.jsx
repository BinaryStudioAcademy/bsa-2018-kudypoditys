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
import history from "client/history";

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
        let resultsData = [];
        let index ="properties"
        axios.get(
                `http://127.0.0.1:5000/elastic/autocomplete?index=${index}&type=document&query=${this.state.query}`
            )
            .then(propertiesResponse => {
                console.log("response Roperties= " + JSON.stringify(propertiesResponse));
                propertiesResponse.data.forEach(element => {
                    resultsData.push({
                        title: element._source.name,
                        description: element._source.description,
                        image:element._source.image
                    });
                });

                index="cities"
                return axios.get(`http://127.0.0.1:5000/elastic/autocomplete?index=${index}&type=document&query=${this.state.query}`)
            }).then(citiesResponse => {
                console.log("response Cities= " + JSON.stringify(citiesResponse));
                citiesResponse.data.forEach(element => {
                    resultsData.push({
                        title: element._source.city,
                        description: element._source.country,
                    });
                });
                this.setState({
                    results: resultsData,
                    isLoading: false
                });
            })

    };

    componentWillMount() {
        this.resetComponent();
    }

    resetComponent = () =>
        this.setState({ isLoading: false, results: [], value: "" });

    handleResultSelect = (e, { result }) => {
             this.setState({
            query: result.title,
            isLoading: false

        });
    }

    handleSearchChange = (e, { value }) => {
        this.setState(
            {
                isLoading: true,
                query: value
            },
            () => {
                if (this.state.query && this.state.query.length > 0) {
                    this.getInfo();
                }
            }
        );
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
        let path = `/search-page`;
        history.push(path)
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
        const { isLoading, query, results } = this.state;
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
                        onSearchChange={this.handleSearchChange}
                        results={results}
                        value={query}
                        {...this.props}
                        required
                    />
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
                        onClick={this.handleSubmit}
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
