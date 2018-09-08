import React from "react";
import "./index.scss";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {mapStateToProps, mapDispatchToProps} from "./container";
import request from 'superagent';
import {Checkbox, Card, List} from 'semantic-ui-react'

// import Checkbox from './Checkbox';

import {ratingScore, facilities, bedTypes} from './filters'


class Quickfilter extends React.Component {

    handleChange = (e, data) => {
        const item = data.name;
        const value = data.value;
        this.props.selectFilter({
            [item]: value
        });


    }




    drawBoxes(arr) {
        const temp = arr.map((item, i) => (

            <List.Item key={i} style={{margin: '1rem', padding: '0'}}>
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

        const list3 = this.drawBoxes(bedTypes);

        return (
            <div className="box">
                <div className="box_header">
                    <div className="Clear__filter">Clear filters</div>
                </div>

                <p className="box_group">Facility</p>
                {/*{list2}*/}
                <List>
                    {list3}
                </List>
                <p className="box_group">Review Score</p>
                {/*{list1}*/}
                <p className="box_group">Bed Types</p>
                {/*{list3}*/}

                <List>
                    {list1}
                </List>



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
