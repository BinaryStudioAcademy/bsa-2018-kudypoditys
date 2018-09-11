import React from "react";
import "./index.scss";
import { Menu, Dropdown } from "semantic-ui-react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";
import history from "client/history";
import queryString from "query-string";
export class RankingBar extends React.Component {
    constructor() {
        super();
        this.state = {
            searchRequest: { sortBy: "" }
        };
    }
    componentDidMount() {
        if (history.location.search !== "") {
            const searchRequest = queryString.parse(history.location.search);
            this.setState({ searchRequest: searchRequest })

        }
    }
    handleItemClick = (event, value) => {
        if (history.location.search !== "") {
            const searchRequest = queryString.parse(history.location.search);
            searchRequest.sortBy = value.value;
            this.setState(searchRequest)
            this.props.onSelect(searchRequest);
        }
    };

    render() {
        const { sortBy } = this.state.searchRequest;
        return (
            <div className="sorting-bar">
                <Menu className="ranking-dropDown">
                    <Menu.Item
                        name="Lowest price first"
                        content="Lowest price first"
                        value={PRICE}
                        active={sortBy === PRICE}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name="Distance from city centre"
                        content="Distance from city centre"
                        value={DISTANCE}
                        active={sortBy === DISTANCE}
                        onClick={this.handleItemClick}
                    />
                    <Dropdown
                        style={{ width:70, border: 0 }}
                        item
                        text="Stars"
                        simple
                        icon="caret down"
                    >
                        <Dropdown.Menu>
                            <Dropdown.Item
                                value={HIGH_RANK}
                                active={sortBy === HIGH_RANK}
                                onClick={this.handleItemClick}
                            >
                            stars [5→1]
                            </Dropdown.Item>
                            <Dropdown.Item
                                value={LOW_RANK}
                                active={sortBy === LOW_RANK}
                                onClick={this.handleItemClick}
                            >
                                stars [1→5]
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu>
            </div>
        );
    }
}

const SORT_VALUE = {
    PRICE: "price",
    DISTANCE: "distance_to_center",
    LOW_RANK: "rating_starting_from_low",
    HIGH_RANK: "rating_starting_from_high"
};

const { PRICE, DISTANCE, LOW_RANK, HIGH_RANK } = SORT_VALUE;

RankingBar.propTypes = {
    activeItem: PropTypes.string
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RankingBar);
