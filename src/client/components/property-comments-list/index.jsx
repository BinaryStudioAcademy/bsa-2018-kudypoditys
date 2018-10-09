import React from "react";
import PropTypes from "prop-types";
import "react-dates/initialize";

import "react-dates/lib/css/_datepicker.css";
import "./index.scss";
import PropertyComment from "client/components/property-comment";
import {Divider} from "semantic-ui-react";

export class PropertyCommentsList extends React.Component {
    componentDidMount() {
    }

    render() {
        const dividerStyle = {
            color: "#465672",
            borderTop: "1px solid #46567215",
            borderBottom: "1px solid #465672"
        };
        console.log("Comments List props = ");
        console.log(this.props);

        if (!this.props) return null;
        const listItems = this.props.reviews.map((item, index) => {
            return (
                <React.Fragment>
                    <PropertyComment key={item.id} {...item} />
                    <Divider style={{...dividerStyle, width: "250px"}}/>
                </React.Fragment>
            )
        });

        return (
            <div className='ui comments comments-block'>
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
