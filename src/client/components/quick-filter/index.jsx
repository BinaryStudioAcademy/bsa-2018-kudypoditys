import React from "react";
import "./index.scss";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {mapStateToProps, mapDispatchToProps} from "./container";
import request from 'superagent';

import Checkbox from './Checkbox';

import {ratingScore, facilities, bedTypes} from './filters'


class Quickfilter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checkedItems: new Map(),
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        const item = e.target.name;
        const isChecked = e.target.checked;
        this.props.selectFilter({
            [item]:isChecked
        });


        console.log("check" + isChecked)
        this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));

    }



    handleItemClick(box) {
        // const request = this.props.searchRequest
        // request.facilityFilter = box
        // this.props.selectFilter(request);
        // console.log(box)


    }
    // handleOpen = () => {
    //     this.setState({ modalOpen: true })
    //     console.log(this.state)
    // }
    // sortByType(type) {
    //     return this.props.boxes.filter(function (obj) {
    //         return obj.type === type;
    //     });
    // }

    drawBoxes(arr) {
        const temp = arr.map(item => (

            <div
                key={item.name}
                className="box_item"

            >

            <div className="ui input checkbox">
            <Checkbox name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} />
                <label className="box_label" key={item.key}>
                    {" "}
                    {item.label}{" "}


                </label>
        </div>
            </div>




        ));
        return temp;
    }
    render() {
        // const PropertyType = this.sortByType("Property Type");
        // const Facility = this.sortByType("Facility");
        // const ReviewScore = this.sortByType("Review Score");
        // const HotelClass = this.sortByType("Hotel Class");

        const list1 = this.drawBoxes(ratingScore);
        const list2 = this.drawBoxes(facilities);
        const list3 = this.drawBoxes(bedTypes);
        // const list4 = this.drawBoxes(HotelClass);

        return (
            <div className="box">
                <div className="box_header">
                    <div className="Clear__filter">Clear filters</div>
                </div>

                <p className="box_group">Facility</p>
                {list2}
                <p className="box_group">Review Score</p>
                {list1}
                <p className="box_group">Bed Types</p>
                {list3}
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
