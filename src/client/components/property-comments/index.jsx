import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import "react-dates/initialize";

import "react-dates/lib/css/_datepicker.css";
import axios from "axios";
import {mapStateToProps} from "./container";
import "./index.scss";

export class PropertyComments extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            property: {}
        }
        // TODO:
        // this.state = {
        //     startDate: moment(),
        //     endDate: moment().add(5, "days"),
        //     focusedInput: null,
        //     rooms: 1, // props.rooms,
        //     adults: 1, // props.adults,
        //     children: 0, // props.children,
        //     query: "", // props.query || props.search.query || // Maybe here set props of redux state
        //     page: 1,
        //     results: []
        // };
    }
    componentDidMount() {
    }

    render() {
        // console.log("state=" + JSON.stringify(this.state));
        return (<div>HELLO FROM COMMENTS COMPONENT</div>);
    }
}

// TODO
PropertyComments.propTypes = {
    property: PropTypes.object
};

PropertyComments.defaultProps = {
    property: {},
};

export default connect(
    mapStateToProps
)(PropertyComments);
