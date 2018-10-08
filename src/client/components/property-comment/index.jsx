import React from "react";
import PropTypes from "prop-types";
import "react-dates/initialize";

import "react-dates/lib/css/_datepicker.css";
import "./index.scss";
import moment from "moment";

export class PropertyComment extends React.Component {
    render() {
        console.log("comment props = ");
        console.log(this.props);
        const createdAtTimeAgo = moment(this.props.createdAt).fromNow();
        const displayName = this.props.user.nickname ? this.props.user.nickname : this.props.user.fullName;
        const avatarUrl = this.props.user.avatar ? this.props.user.avatar : 'https://ui-avatars.com/api/?name=' + displayName;
        return (
            <div className=' comment'>
                <div className=' avatar'>
                    <img src={avatarUrl} alt={'User Avatar'}/>
                </div>
                <div className='content'>
                    <a className='author'>{displayName}</a>
                    <div className='metadata review-flag'>
                        <i className={this.props.user.country.icon} />
                        <div>{this.props.user.country.name}</div>
                    </div>
                    <div className='text'>{this.props.pros}</div>
                    <div className='metadata review-rating'>
                        <div>
                            <span>{this.props.avgReview} <i className="star icon"/></span>
                            <span>{createdAtTimeAgo}</span>
                        </div>
                    </div>
                    {/*<div className='actions'>*/}
                        {/*/!*<div className="ui star rating icon" data-rating="3"/>*!/*/}
                        {/*<div>{this.props.avgReview} <i aria-hidden='true' className="star icon"/> {createdAtTimeAgo}</div>*/}
                    {/*</div>*/}
                </div>
            </div>
        );
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
