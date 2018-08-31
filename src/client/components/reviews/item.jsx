import React, {Component, Fragment, connect} from 'react';
import {Card, Comment, Container, Header, Image} from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './index.scss';


export default class Review extends Component {

    render() {

        const {reviewData} = this.props,
            {collapsed}=this.props
        return (
            <Fragment>

                    <Comment collapsed={collapsed}>
                        <Comment.Avatar src={reviewData.user.avatar}/>
                        <Comment.Content>
                            <Comment.Author>{reviewData.user.fullName}</Comment.Author>
                            <Comment.Metadata>
                                <span>{reviewData.user.createdAt}</span>
                            </Comment.Metadata>
                            <Comment.Text>{reviewData.content}</Comment.Text>
                        </Comment.Content>
                    </Comment>

            </Fragment>
        );
    }
}



