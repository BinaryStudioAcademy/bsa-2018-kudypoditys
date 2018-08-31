import React, { Component, Fragment } from 'react';
import { Card, Comment,  } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './index.scss';

import defaultUserPic from './img/matt.jpg';

export default class Review extends Component {
    render() {
        const {reviewData, collapsed} = this.props;
        console.log(this.props)
        const date = new Date(reviewData.createdAt).toLocaleString();
        console.log(date);
        return (
            <Fragment>
                <Comment collapsed={collapsed}>
                    <Comment.Avatar
                        src={
                            reviewData.user.avatar === null
                                ? defaultUserPic
                                : reviewData.user.avatar
                        }
                    />
                    <Comment.Content>
                        <Comment.Author>
                            {reviewData.user.fullName}
                        </Comment.Author>
                        <Comment.Metadata>
                            <span>{date}</span>
                        </Comment.Metadata>
                        <Comment.Text>{reviewData.content}</Comment.Text>
                    </Comment.Content>
                </Comment>
            </Fragment>
        );
    }
}

