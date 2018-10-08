import React from "react";
import PropTypes from "prop-types";
import "react-dates/initialize";

import "react-dates/lib/css/_datepicker.css";
import "./index.scss";

export class PropertyComment extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }

    render() {
        console.log("comment props = " + JSON.stringify(this.props));
        return (<div>{this.props.comment}</div>);
    }
}

// TODO
PropertyComment.propTypes = {
    comment: PropTypes.object
};

PropertyComment.defaultProps = {
    comment: {},
};

export default PropertyComment;
