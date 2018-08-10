import React from "react";
import "./index.scss";
import PropTypes from "prop-types";

class Quickfilter extends React.Component {
    findBox(name, boxes) {
        for (let i in boxes) {
            if (boxes[i].id === name) {
                return i;
            }
        }
    }

    onChange = e => {
        const boxes = this.props.boxes;
        const name = e.target.attributes[1].nodeValue;
        let index = this.findBox(name, boxes);

        boxes[index].ischecked = !boxes[index].ischecked;
        this.props.changeQuickFilter(boxes);
    };

    sortByType(type) {
        console.log(this.props);
        return this.props.boxes.filter(function(obj) {
            return obj.type === type;
        });
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
                        type="checkbox"
                        defaultChecked={box.ischecked}
                        name={box.id}
                        id={box.id}
                        onChange={this.onChange.bind(this)}
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
export default Quickfilter;
