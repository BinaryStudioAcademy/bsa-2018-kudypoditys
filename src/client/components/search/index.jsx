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
    resetComponent = () =>
        this.setState({ isLoading: false, results: [], value: "" });
    getInfo = () => {
        let resultsData = [];
        let index = "properties";
        axios
            .get(
                `http://127.0.0.1:5000/elastic/autocomplete?index=${index}&type=document&query=${
                    this.state.query
                }`
            )
            .then(propertiesResponse => {
                console.log(
                    "response Roperties= " + JSON.stringify(propertiesResponse)
                );
                propertiesResponse.data.forEach(element => {
                    resultsData.push({
                        title: element._source.name,
                        description: element._source.description,
                        image: element._source.image
                    });
                });

                index = "cities";
                return axios.get(
                    `http://127.0.0.1:5000/elastic/autocomplete?index=${index}&type=document&query=${
                        this.state.query
                    }`
                );
            })
            .then(citiesResponse => {
                console.log(
                    "response Cities= " + JSON.stringify(citiesResponse)
                );
                citiesResponse.data.forEach(element => {
                    resultsData.push({
                        title: element._source.city,
                        description: element._source.country
                    });
                });
                this.setState({
                    results: resultsData,
                    isLoading: false
                });
            });
    };
    handleResultSelect = (e, { result }) => {
        this.setState({
            query: result.title,
            isLoading: false
        });
        this.props.onQueryChange(this.state.query);
    };
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
    handleSubmit = () => {
        console.log("handleSubmit trigered");
        let path = `/search-page`;
        history.push(path);
        const {
            query,
            rooms,
            adults,
            children,
            startDate,
            endDate
        } = this.state;
        this.props.onSearch({
            query: query,
            rooms: rooms,
            adults: adults,
            children: children,
            startDate: startDate,
            endDate: endDate
        });
    };

    constructor(props) {
        super(props);
        this.roomSelector = React.createRef();
        this.state = {
            startDate: moment(),
            endDate: moment().add(5, "days"),
            focusedInput: null,
            rooms: 1,
            adults: 1,
            children: 1,
            query: "",
            results: []
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
        if (this.state.adults === 1) return "1 Adult";
        return `${this.state.adults} Adults`;
    };

    childrenOutput = () => {
        switch (this.state.children) {
            case 0:
                return "No children";
            case 1:
                return "1 Child";
            default:
                return `${this.state.children} Children`;
        }
    };
    onAdultsSelected = count => {
        this.setState({ adults: count });
        this.props.onAdultsChange(count);
    };

    onChildrenSelected = count => {
        this.setState({ children: count });
        this.props.onChildrenChange(count);
    };

    onChildrenSelected = count => {
        this.setState({ children: count });
        this.props.onChildrenChange(count);
    };

    onRoomsSelected = count => {
        this.setState({ rooms: count });
        this.props.onRoomsChange(count);
    };

    componentWillMount() {
        this.resetComponent();
    }

    datesChanged = selectedDates => {
        if (selectedDates.startDate && selectedDates.endDate) {
            this.props.onDatesChange(selectedDates);
        }
        this.setState(selectedDates);
    };

    render() {
        // console.log("state=" + JSON.stringify(this.state));

        const selectOptionsRooms = this.generateOptions(1, 30);
        const selectOptionsAdults = this.generateOptions(1, 10);
        const {
            isLoading,
            query,
            results,
            rooms,
            adults,
            children
        } = this.state;
        // console.log("props!!!=" + JSON.stringify(this.props));
        if (this.props.search.data !== undefined) {
            const { data } = this.props.search;

            //console.log("search state" + JSON.stringify(this.state));

            if (data !== undefined && data !== "" && data.length > 0) {
                // console.log("searchResults" + JSON.stringify(data));
                this.props.handleSearchResults({
                    searchResults: data,
                    searchRequest: {
                        query: this.state.query,
                        rooms: this.state.rooms,
                        adults: this.state.adults,
                        children: this.state.children,
                        startDate: this.state.startDate,
                        endDate: this.state.endDaten
                    }
                });
            }
        }
        const childrenOptions = this.generateOptions(0, 10);

        return (
            <Form
                className="search search--view-bar"
                onSubmit={this.handleSubmit}
            >
                <div className="destination">
                    <Search
                        style={{ height: 60 }}
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
                <div
                    className="check-in-out"
                    style={{ height: 60 }}
                    onFocus={this.hideRoomSelector}
                >
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
                                            this.onRoomsSelected(input.value)
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
                                            this.onAdultsSelected(input.value)
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
                                            this.onChildrenSelected(input.value)
                                        }
                                    />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </div>
                </div>

                <div className="btn-wrp" style={{ height: 60, width: 134 }}>
                    <Button
                        style={{ height: 60 }}
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
    onRoomsChange: PropTypes.func.isRequired,
    handleSearchResults: PropTypes.func.isRequired,
    data: PropTypes.array
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
