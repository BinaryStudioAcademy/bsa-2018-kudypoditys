import React from "react";
import "./index.scss";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";
import request from "superagent";
import { Checkbox, Card, List } from "semantic-ui-react";
import history from "client/history";
import queryString from "query-string";
// import Checkbox from './Checkbox';

import { ratingScore,  bedTypes,priceScore,bedsType } from "./filters";

class Quickfilter extends React.Component {
    constructor() {
        super();
        this.state = {
            searchRequest: {} //todo
        };
    }
    componentDidMount() {
        if (history.location.search !== "") {
            const searchRequest = queryString.parse(history.location.search);
            this.setState({ searchRequest: searchRequest });
        }
    }
    handleChange = (e, data) => {
        console.log("eve" + JSON.stringify(e));
        console.log("data" + JSON.stringify(data));
        if (history.location.search !== "") {
            let searchRequest = queryString.parse(history.location.search);
            const item = data.name;
            const value = data.checked ? data.value : "";
            this.props.selectFilter({ ...searchRequest, ...{ [item]: value } });
        }
    };

    drawBoxes(arr) {
        const temp = arr.map((item, i) => (
            <List.Item key={i} style={{ margin: "1rem", padding: "0" }}>
                <Checkbox
                    name={item.name}
                    label={item.label}
                    value={item.value}
                    onChange={(e, data) => this.handleChange(item.key, data)}
                />
            </List.Item>
        ));
        return temp;
    }
    render() {
        const list1 = this.drawBoxes(ratingScore);
        const list2= this.drawBoxes(priceScore);
        const list3= this.drawBoxes(bedTypes);
        const list4= this.drawBoxes(bedsType);

        return (
            <div className="box">
                <div className="box_header">
                    <div className="Clear__filter">Clear filters</div>
                </div>

                <p className="box_group">Facility</p>

                <List>{list3}</List>
                <p className="box_group">Bed types</p>

                <List>{list4}</List>
                <p className="box_group">Rating</p>
                <List>{list1}</List>
                 <p className="box_group">Price</p>
                 <List>{list2}</List>
            </div>
        );
    }
}

Quickfilter.propTypes = {
    boxes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            ischecked: PropTypes.boolean,
            label: PropTypes.string,
            amount: PropTypes.oneOfType([PropTypes.number], [PropTypes.string]),
            type: PropTypes.string
        })
    ),
    OnQuickFilterChange: PropTypes.func
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Quickfilter);
