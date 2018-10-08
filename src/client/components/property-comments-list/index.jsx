import React from "react";
import PropTypes from "prop-types";
import "react-dates/initialize";

import "react-dates/lib/css/_datepicker.css";
import "./index.scss";
import PropertyComment from "client/components/property-comment";

export class PropertyCommentsList extends React.Component {
    componentDidMount() {
    }

    render() {
        console.log("Comments List props = ");
        console.log(this.props);

        if(!this.props) return null;

        const listItems = this.props.reviews.map((item, index) =>
            <PropertyComment key={item.id} {...item} />
        );

        return (
            <div className='ui comments'>
                <h3 className='ui dividing header'>What guests loved the most</h3>
                {listItems}
            </div>
        )
    }
}

PropertyCommentsList.propTypes = {
    property: PropTypes.object.isRequired
};

PropertyCommentsList.defaultProps = {
    property: null,
};

export default PropertyCommentsList;
