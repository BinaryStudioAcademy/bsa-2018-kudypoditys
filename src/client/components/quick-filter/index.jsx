import React from "react";
import "./index.scss";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";

class Quickfilter extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            boxes : [
                {id:'1', ischecked: true, label:'Pool', amount: 321,type:'Facility'},
                {id:'1', ischecked: true, label:'Restoraunt', amount: 1213,type:'Facility'},
                {id:'1', ischecked: true, label:'SPA', amount: 17,type:'Facility'},
                {id:'2', ischecked: false, label:'Good location: 7+', amount: 231, type:'Review Score'},
                {id:'2', ischecked: false, label:'Very good location: 8+', amount: 113, type:'Review Score'},
                {id:'6', ischecked: false, label:'Excelent location: 9+', amount: 324, type:'Review Score'},
                {id:'4', ischecked: false, label:'Hotel', amount: 345, type:'Property Type'},
                {id:'3', ischecked: false, label:'Hostel', amount: 69, type:'Property Type'},
                {id:'5', ischecked: false, label:'Motel', amount: 12, type:'Property Type'},

            ]
        }
    }
    handleItemClick(box){
        this.props.selectFilter(box);
    }

    sortByType(type){
        return this.state.boxes.filter(function (obj) { return obj.type === type});
    }

    drawBoxes(arr) {
        const temp = arr.map(box => (
            <div
                key={box.id}
                className={
                    box.ischecked === true ? "box_item_checked" : "box_item"
                }
            >
                <div className="ui input checkbox">
                    <input
                        key={box.id}
                        type="checkbox"
                        defaultChecked={box.ischecked}
                        id={box.id}
                        onChange={() => this.handleItemClick(box)}
                    />
                    <label className="box_label" htmlFor={box.id}>
                        {" "}
                        {box.label}{" "}
                    </label>
                </div>
                <label className="box_amount" htmlFor={box.id}>
                    {box.amount}
                </label>
            </div>
        ));
        return temp;
    }
    render() {
        const PropertyType = this.sortByType("Property Type");
        const Facility = this.sortByType("Facility");
        const ReviewScore = this.sortByType("Review Score");

        const list1 = this.drawBoxes(PropertyType);
        const list2 = this.drawBoxes(Facility);
        const list3 = this.drawBoxes(ReviewScore);

        return (
            <div className="box">
                <div className="box_header">
                    <h2>Filter by</h2>
                </div>
                <p className="box_group">Property Type</p>
                {list1}
                <p className="box_group">Facility</p>
                {list2}
                <p className="box_group">Review Score</p>
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
