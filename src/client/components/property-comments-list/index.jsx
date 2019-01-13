import React from "react";
import "react-dates/initialize";

import "react-dates/lib/css/_datepicker.css";
import "./index.scss";
import PropertyComment from "../property-comment";
import { Divider } from "semantic-ui-react";

export class PropertyCommentsList extends React.Component {
    componentDidMount() {
    }

    render() {
        const dividerStyle = {
            color: "#465672",
            borderTop: "1px solid #46567215",
            borderBottom: "1px solid #465672"
        };
        if (!this.props) return null;
        const listItems = this.props.reviews.map((item, index) => {
            return (
                <React.Fragment key={item.id}>
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
};

export default PropertyCommentsList;
