import React from "react";
import "./index.scss";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";
import { Checkbox, List } from "semantic-ui-react";
import history from "../../history";
import queryString from "query-string";

import { ratingScore, bedTypes, priceScore, bedsType } from "./filters";

class Quickfilter extends React.Component {

    handleChange = (e, data) => {
        if (history.location.search !== "") {
            let searchRequest = queryString.parse(history.location.search);
            const item = data.name;
            const value = data.checked ? data.value : "";
            this.props.selectFilter({ ...searchRequest, ...{ [item]: value } });
        }
    };
    clearFilter = ()=>{
        if (history.location.search !== "") {
            let searchRequest = queryString.parse(history.location.search);
            searchRequest.Wonderful = ""
            searchRequest.Very_Good = ""
            searchRequest.Good= ""
            searchRequest.Pleasant = ""
            searchRequest.Its_Ok = ""
            searchRequest.No_rating = ""
            searchRequest.US0_US30 = ""
            searchRequest.US30_US60 = ""
            searchRequest.US60_US90 = ""
            searchRequest.US90 = ""
            searchRequest.Queen_bed = ""
            searchRequest.Twin_bed = ""
            searchRequest.Full_bed = ""
            searchRequest.King_bed = ""
            searchRequest.Fitness_spa_locker_rooms = ""
            searchRequest.Full_body_massage = ""
            searchRequest.Daily_maid_service= ""
            searchRequest.Laundry = ""
            searchRequest.Walking_tours = ""
            searchRequest.Live_music_performance = ""
            searchRequest.Live_sport_events = ""
            searchRequest.Themed_dinner_nights = ""
            searchRequest.Movie_nights = ""
            searchRequest.Dogs = ""
            this.props.selectFilter(searchRequest)
            // console.log("oooooo " +JSON.stringify(searchRequest))
        }
    }
    drawBoxes(arr) {
        let searchRequest;
        if (history.location.search !== "") {
            searchRequest = queryString.parse(history.location.search);
        }
        const temp = arr.map((item, i) => (
            <List.Item key={i} style={{ margin: "1rem", padding: "0" }}>
                <Checkbox
                    name={item.name}
                    label={item.label}
                    value={item.value}
                    checked={searchRequest[item.name] === item.value}
                    onClick={(e, data) => this.handleChange(item.key, data)}
                />
            </List.Item>
        ));
        return temp;
    }
    render() {
        const list1 = this.drawBoxes(ratingScore);
        const list2 = this.drawBoxes(priceScore);
        const list3 = this.drawBoxes(bedTypes);
        const list4 = this.drawBoxes(bedsType);

        return (
            <div className="box">
                <div className="box_header">
                    <div onClick={this.clearFilter} className="Clear__filter">Clear filters</div>
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
