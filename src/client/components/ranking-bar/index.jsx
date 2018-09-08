import React from "react";
import "./index.scss";
import { Menu, Dropdown } from "semantic-ui-react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";

export class RankingBar extends React.Component {
    handleItemClick = (event, value) => {
        const searchRequest = this.props.searchRequest;
        searchRequest.sortBy = value.value;
        this.props.onSelect(searchRequest);
        this.props.onSortingSelected(value.value);
    };

    render() {
        const { activeItem } = this.props;
        return (
            <div className="sorting-bar">
                <Menu className="ranking-dropDown">
                    <Menu.Item
                        name="Lowest price first"
                        content="Lowest price first"
                        value={PRICE}
                        active={activeItem === PRICE}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name="Distance from city centre"
                        content="Distance from city centre"
                        value={DISTANCE}
                        active={activeItem === DISTANCE}
                        onClick={this.handleItemClick}
                    />
                        <Dropdown
                        style={{ width: 100 ,border:0}}
                            item
                            text="Rating"
                            simple
                            icon="caret down"
                        >
                            <Dropdown.Menu>
                                <Dropdown.Item
                                    value={HIGH_RANK}
                                    active={activeItem === HIGH_RANK}
                                    onClick={this.handleItemClick}
                                >
                                    rating [10→1]
                                </Dropdown.Item>
                                <Dropdown.Item
                                    value={LOW_RANK}
                                    active={activeItem === LOW_RANK}
                                    onClick={this.handleItemClick}
                                >
                                    rating [1→10]
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
